'use strict';

function albumCurlGeometry(width,height,progress,segments=40) {
  const p=Math.max(0,Math.min(1,progress));
  const hinge=Math.max(0,(p-.25)/.75);
  const rotation=Math.PI*hinge*hinge*(3-2*hinge);
  const bend=2.6*Math.sin(Math.PI*p);
  const distance=width*3.5,step=width/segments;
  let x=0,z=0;
  const points=[{x:0,z:0,top:0,bottom:height,angle:rotation}];
  const strips=[];
  for(let i=0;i<segments;i++) {
    const angle=rotation+bend*(i+.5)/segments;
    x+=Math.cos(angle)*step;
    z+=Math.sin(angle)*step;
    const scale=distance/(distance-z);
    const point={x:x*scale,z,top:height*(1-scale)/2,bottom:height*(1+scale)/2,angle:rotation+bend*(i+1)/segments};
    points.push(point);
    strips.push({index:i,angle,depth:(points[i].z+z)/2,left:points[i],right:point});
  }
  return {points,strips};
}

function drawAlbumCurlTriangle(ctx,texture,sx,sw,points,second) {
  const [p,q,r]=points;
  const cx=(p.x+q.x+r.x)/3,cy=(p.y+q.y+r.y)/3;
  ctx.save();
  ctx.beginPath();
  points.forEach((point,index)=>{
    const x=point.x+Math.sign(point.x-cx)*2,y=point.y+Math.sign(point.y-cy)*2;
    if(index)ctx.lineTo(x,y);else ctx.moveTo(x,y);
  });
  ctx.closePath();ctx.clip();
  if(second)ctx.transform(q.x-r.x,q.y-r.y,q.x-p.x,q.y-p.y,p.x+r.x-q.x,p.y+r.y-q.y);
  else ctx.transform(q.x-p.x,q.y-p.y,r.x-p.x,r.y-p.y,p.x,p.y);
  // Sample neighboring pixels beyond each strip to avoid transparent hairlines at the seams.
  ctx.drawImage(texture,-sx/sw,0,texture.width/sw,1);
  ctx.restore();
}

function drawAlbumCurledPage(ctx,texture,width,height,progress) {
  ctx.clearRect(0,0,width,height);
  const {points,strips}=albumCurlGeometry(width,height,progress);
  function quad(strip) {
    const a=strip.left,b=strip.right;
    return [{x:a.x,y:a.top},{x:b.x,y:b.top},{x:b.x,y:b.bottom},{x:a.x,y:a.bottom}];
  }
  function path(vertices,padding=0) {
    const cx=vertices.reduce((sum,p)=>sum+p.x,0)/vertices.length,cy=vertices.reduce((sum,p)=>sum+p.y,0)/vertices.length;
    ctx.beginPath();vertices.forEach((point,i)=>{const x=point.x+Math.sign(point.x-cx)*padding,y=point.y+Math.sign(point.y-cy)*padding;if(i)ctx.lineTo(x,y);else ctx.moveTo(x,y);});ctx.closePath();
  }
  ctx.save();
  ctx.shadowColor='rgba(63,43,25,.35)';ctx.shadowBlur=width*.065;ctx.shadowOffsetX=width*.025;
  path([...points.map(p=>({x:p.x,y:p.top})),...points.slice().reverse().map(p=>({x:p.x,y:p.bottom}))]);
  ctx.fillStyle='rgba(96,71,40,.06)';ctx.fill();ctx.restore();
  // Draw farther paper first so the curled edge can cover the front of its own page.
  for(const strip of strips.sort((a,b)=>a.depth-b.depth)) {
    const vertices=quad(strip),normal=Math.cos(strip.angle);
    if(normal>=0) {
      const sx=texture.width*strip.index/strips.length,sw=texture.width/strips.length;
      drawAlbumCurlTriangle(ctx,texture,sx,sw,[vertices[0],vertices[1],vertices[3]],false);
      drawAlbumCurlTriangle(ctx,texture,sx,sw,[vertices[1],vertices[2],vertices[3]],true);
      path(vertices,2);ctx.fillStyle='rgba(54,34,17,'+((1-normal)*.29).toFixed(3)+')';ctx.fill();
    } else {
      const shade=Math.round((1-Math.abs(normal))*33);
      path(vertices,2);ctx.fillStyle='rgb('+(250-shade)+','+(242-shade)+','+(226-shade)+')';ctx.fill();
    }
  }
  const tip=points[points.length-1];
  ctx.beginPath();ctx.moveTo(tip.x,tip.top);ctx.lineTo(tip.x,tip.bottom);ctx.strokeStyle='rgba(139,111,78,.55)';ctx.lineWidth=.8;ctx.stroke();
}

function startAlbumCurlWebGL(canvas,texture,width,height,direction,onFinish) {
  let gl;
  try { gl=canvas.getContext('webgl',{alpha:true,antialias:true,preserveDrawingBuffer:true}); } catch {return null;}
  if(!gl)return null;
  const vertex=`attribute vec4 position;attribute vec2 uv;attribute float light;varying vec2 imageUV;varying float shade;void main(){gl_Position=position;imageUV=uv;shade=light;}`;
  const fragment=`precision mediump float;uniform sampler2D picture;varying vec2 imageUV;varying float shade;void main(){float brightness=1.0-.24*(1.0-abs(shade));vec3 paper=vec3(.98,.95,.89);vec3 color=gl_FrontFacing?texture2D(picture,imageUV).rgb:paper;gl_FragColor=vec4(color*brightness,1.0);}`;
  function shader(type,source) {
    const result=gl.createShader(type);gl.shaderSource(result,source);gl.compileShader(result);
    if(!gl.getShaderParameter(result,gl.COMPILE_STATUS)){gl.deleteShader(result);return null;}
    return result;
  }
  const vs=shader(gl.VERTEX_SHADER,vertex),fs=shader(gl.FRAGMENT_SHADER,fragment);
  if(!vs||!fs){if(vs)gl.deleteShader(vs);if(fs)gl.deleteShader(fs);return null;}
  const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS)){gl.deleteProgram(program);return null;}
  gl.useProgram(program);
  const buffer=gl.createBuffer(),indices=gl.createBuffer(),imageTexture=gl.createTexture();
  const segments=60,vertices=new Float32Array((segments+1)*2*7),triangles=new Uint16Array(segments*6);
  for(let i=0;i<segments;i++)triangles.set([i*2,i*2+1,i*2+2,i*2+2,i*2+1,i*2+3],i*6);
  gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,vertices.byteLength,gl.DYNAMIC_DRAW);
  for(const [name,size,offset] of [['position',4,0],['uv',2,16],['light',1,24]]) {
    const location=gl.getAttribLocation(program,name);gl.enableVertexAttribArray(location);gl.vertexAttribPointer(location,size,gl.FLOAT,false,28,offset);
  }
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indices);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,triangles,gl.STATIC_DRAW);
  gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,imageTexture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texture);gl.uniform1i(gl.getUniformLocation(program,'picture'),0);
  gl.viewport(0,0,canvas.width,canvas.height);gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);gl.disable(gl.CULL_FACE);gl.clearColor(0,0,0,0);
  function draw(progress) {
    const {points}=albumCurlGeometry(width,height,progress,segments);
    points.forEach((point,i)=>{
      const w=1-point.z/(width*3.5),normal=Math.cos(point.angle);
      vertices.set([(point.x/width*2-1)*w,(1-point.top/height*2)*w,-point.z/width*w,w,i/segments,1,normal],i*14);
      vertices.set([(point.x/width*2-1)*w,(1-point.bottom/height*2)*w,-point.z/width*w,w,i/segments,0,normal],i*14+7);
    });
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferSubData(gl.ARRAY_BUFFER,0,vertices);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.drawElements(gl.TRIANGLES,triangles.length,gl.UNSIGNED_SHORT,0);
  }
  let frame=0,start,cancelled=false;
  function tick(time) {
    if(cancelled)return;if(start===undefined)start=time;
    const elapsed=Math.min(1,(time-start)/1000),t=direction>0?elapsed:1-elapsed;
    draw(t*t*(.6+.4*t));
    if(elapsed<1)frame=requestAnimationFrame(tick);else{frame=0;onFinish();}
  }
  draw(direction>0?0:1);frame=requestAnimationFrame(tick);
  if(canvas.dataset)canvas.dataset.renderer='webgl';
  return {cancel(){if(cancelled)return;cancelled=true;if(frame)cancelAnimationFrame(frame);gl.deleteBuffer(buffer);gl.deleteBuffer(indices);gl.deleteTexture(imageTexture);gl.deleteProgram(program);}};
}

function startAlbumPageCurl(canvas,image,direction,onFinish) {
  const width=canvas.clientWidth,height=canvas.clientHeight;
  if(!width || !height || !image.naturalWidth || !image.naturalHeight || !canvas.getContext) return null;
  const ratio=Math.min(2,1440/Math.max(width,height));
  canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);
  const texture=document.createElement('canvas');texture.width=canvas.width;texture.height=canvas.height;
  const paper=texture.getContext('2d');
  if(!paper)return null;
  paper.fillStyle='#ede4da';paper.fillRect(0,0,texture.width,texture.height);
  const scale=Math.min(texture.width/image.naturalWidth,texture.height/image.naturalHeight);
  const w=image.naturalWidth*scale,h=image.naturalHeight*scale;
  paper.drawImage(image,(texture.width-w)/2,(texture.height-h)/2,w,h);
  const accelerated=startAlbumCurlWebGL(canvas,texture,width,height,direction,onFinish);
  if(accelerated)return accelerated;
  const ctx=canvas.getContext('2d');
  if(!ctx)return null;
  ctx.setTransform(ratio,0,0,ratio,0,0);
  if(canvas.dataset)canvas.dataset.renderer='canvas2d';
  let frame=0,start;
  let cancelled=false;
  function tick(time) {
    if(cancelled)return;
    if(start===undefined)start=time;
    const elapsed=Math.min(1,(time-start)/1000);
    const t=direction>0?elapsed:1-elapsed;
    const progress=t*t*(.6+.4*t);
    drawAlbumCurledPage(ctx,texture,width,height,progress);
    if(elapsed<1)frame=requestAnimationFrame(tick);
    else {frame=0;onFinish();}
  }
  // Paint before the first frame to prevent a flash while the animation is scheduled.
  drawAlbumCurledPage(ctx,texture,width,height,direction>0?0:1);
  frame=requestAnimationFrame(tick);
  return {cancel(){cancelled=true;if(frame)cancelAnimationFrame(frame);}};
}
