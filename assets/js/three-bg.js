// ══════════════════════════════════════════════════════════════
// THREE.JS BACKGROUND
// ══════════════════════════════════════════════════════════════
(function(){
  var c=document.getElementById('bg-canvas');
  var R=new THREE.WebGLRenderer({canvas:c,antialias:true,alpha:true});
  R.setPixelRatio(Math.min(devicePixelRatio,2));
  R.setClearColor(0x000000,0);
  var S=new THREE.Scene();
  var CAM=new THREE.PerspectiveCamera(58,innerWidth/innerHeight,.1,1000);
  CAM.position.z=5;
  function rsz(){CAM.aspect=innerWidth/innerHeight;CAM.updateProjectionMatrix();R.setSize(innerWidth,innerHeight);}
  rsz();addEventListener('resize',rsz);

  var N=380;
  var pg=new THREE.BufferGeometry();
  var pp=new Float32Array(N*3),pc=new Float32Array(N*3),ps=new Float32Array(N),pv=[];
  for(var i=0;i<N;i++){
    pp[i*3]=(Math.random()-.5)*20;pp[i*3+1]=(Math.random()-.5)*15;pp[i*3+2]=(Math.random()-.5)*10;
    var t=Math.random();
    if(t<.45){pc[i*3]=1;pc[i*3+1]=.24;pc[i*3+2]=.24;}
    else if(t<.75){pc[i*3]=.24;pc[i*3+1]=.56;pc[i*3+2]=1;}
    else{pc[i*3]=.22;pc[i*3+1]=1;pc[i*3+2]=.62;}
    ps[i]=Math.random()*1.4+.3;
    pv.push({x:(Math.random()-.5)*.003,y:(Math.random()-.5)*.002});
  }
  pg.setAttribute('position',new THREE.BufferAttribute(pp,3));
  pg.setAttribute('color',new THREE.BufferAttribute(pc,3));
  pg.setAttribute('size',new THREE.BufferAttribute(ps,1));
  var pm=new THREE.ShaderMaterial({
    vertexColors:true,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
    vertexShader:`attribute float size;varying vec3 vColor;varying float vAlpha;uniform float uT;
    void main(){vColor=color;vec3 p=position;p.x+=sin(uT*.4+position.y*.5)*.18;p.y+=cos(uT*.3+position.x*.4)*.12;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);float d=length(p.xy);vAlpha=.2+sin(uT*.8+d)*.12;
    gl_PointSize=size*(280./gl_Position.w);}`,
    fragmentShader:`varying vec3 vColor;varying float vAlpha;
    void main(){vec2 c=gl_PointCoord-.5;float d=length(c);float a=smoothstep(.5,.05,d)*vAlpha;gl_FragColor=vec4(vColor,a*.18);}`,
    uniforms:{uT:{value:0}}
  });
  var pts=new THREE.Points(pg,pm);S.add(pts);

  var lg=new THREE.Group();
  for(var i=0;i<18;i++){
    var geo=new THREE.BufferGeometry();
    var x=(Math.random()-.5)*18,y=(Math.random()-.5)*13,z=(Math.random()-.5)*5;
    var len=Math.random()*3.5+1,ang=Math.random()*Math.PI;
    var pa=new Float32Array([x,y,z,x+Math.cos(ang)*len,y+Math.sin(ang)*len,z]);
    geo.setAttribute('position',new THREE.BufferAttribute(pa,3));
    var r=Math.random();
    var lc=r<.5?new THREE.Color(1,.24,.24):r<.8?new THREE.Color(.24,.56,1):new THREE.Color(.22,1,.62);
    lg.add(new THREE.Line(geo,new THREE.LineBasicMaterial({color:lc,transparent:true,opacity:.025+Math.random()*.03})));
  }
  S.add(lg);

  var mx=0,my=0;
  addEventListener('mousemove',function(e){mx=(e.clientX/innerWidth-.5)*2;my=-(e.clientY/innerHeight-.5)*2;});

  var cl=new THREE.Clock();
  function anim(){
    requestAnimationFrame(anim);
    var t=cl.getElapsedTime();
    pm.uniforms.uT.value=t;
    for(var i=0;i<N;i++){
      pp[i*3]+=pv[i].x;pp[i*3+1]+=pv[i].y;
      if(pp[i*3]>10||pp[i*3]<-10)pv[i].x*=-1;
      if(pp[i*3+1]>8||pp[i*3+1]<-8)pv[i].y*=-1;
    }
    pg.attributes.position.needsUpdate=true;
    pts.rotation.y=t*.014;
    lg.rotation.z=t*.007;lg.rotation.x=t*.004;
    CAM.position.x+=(mx*.5-CAM.position.x)*.035;
    CAM.position.y+=(my*.4-CAM.position.y)*.035;
    R.render(S,CAM);
  }
  anim();
})();