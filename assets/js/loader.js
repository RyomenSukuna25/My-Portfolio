// ══════════════════════════════════════════════════════════════
// LOADER
// ══════════════════════════════════════════════════════════════
(function(){
  var nm=document.getElementById('lname');
  var lg=document.getElementById('lg');
  var lp=document.getElementById('lpct');
  'CHIRAG NAGVEKAR'.split('').forEach(function(c,i){
    var s=document.createElement('span');
    s.textContent=c==' '?'\u00a0':c;
    s.style.animationDelay=(i*.05+.1)+'s';
    nm.appendChild(s);
  });
  var n=0,s=performance.now();
  function tick(now){
    var p=Math.min((now-s)/2000,1);
    var e=1-Math.pow(1-p,2);
    n=Math.round(e*100);
    lg.textContent=n;lp.textContent=n+'%';
    if(p<1){requestAnimationFrame(tick);}
    else{setTimeout(function(){
      document.getElementById('loader').classList.add('exit');
      setTimeout(function(){document.getElementById('loader').style.display='none';},1000);
    },300);}
  }
  requestAnimationFrame(tick);
})();

// ══════════════════════════════════════════════════════════════
// CURSOR
// ══════════════════════════════════════════════════════════════
var cdot=document.getElementById('cdot'),cring=document.getElementById('cring'),clbl=document.getElementById('clbl');
var mx={x:-300,y:-300},rx={x:-300,y:-300};
addEventListener('mousemove',function(e){mx.x=e.clientX;mx.y=e.clientY;cdot.style.left=e.clientX+'px';cdot.style.top=e.clientY+'px';});
addEventListener('mousedown',function(){cdot.style.transform='translate(-50%,-50%) scale(2)';});
addEventListener('mouseup',function(){cdot.style.transform='translate(-50%,-50%)';});
(function animR(){rx.x+=(mx.x-rx.x)*.08;rx.y+=(mx.y-rx.y)*.08;cring.style.left=rx.x+'px';cring.style.top=rx.y+'px';clbl.style.left=rx.x+'px';clbl.style.top=rx.y+'px';requestAnimationFrame(animR);})();

function bindHover(){
  document.querySelectorAll('a,button,.work-row,.blog-card,.svc,.proc-card,.faq-q,.garr,.mbtn,.nlogo,.modal-close,.see-all,.skill-row,.stat-cell,.cert-card,.exp-card,.tl-item').forEach(function(el){
    el.addEventListener('mouseenter',function(){document.body.classList.add('hov');clbl.textContent='View';});
    el.addEventListener('mouseleave',function(){document.body.classList.remove('hov');clbl.textContent='';});
  });
  document.querySelectorAll('.work-row').forEach(function(el){
    el.addEventListener('mouseenter',function(){document.body.classList.add('hov-work');});
    el.addEventListener('mouseleave',function(){document.body.classList.remove('hov-work');});
  });
}

// ══════════════════════════════════════════════════════════════
// SCROLL PROGRESS
// ══════════════════════════════════════════════════════════════
addEventListener('scroll',function(){
  var sp=document.getElementById('scroll-prog');
  var pct=(scrollY/(document.body.scrollHeight-innerHeight))*100;
  sp.style.width=pct+'%';
},{passive:true});

// ══════════════════════════════════════════════════════════════
// TEXT SCRAMBLE
// ══════════════════════════════════════════════════════════════
var SC='!<>-_\\/[]{}—=+*^?#0123456789abcdefghijklmnopqrstuvwxyz';
function scramble(el,text,spd){
  spd=spd||18;var f=0;var id=setInterval(function(){
    var o='';for(var i=0;i<text.length;i++){if(i<f/1.8)o+=text[i];else o+=SC[Math.floor(Math.random()*SC.length)];}
    el.textContent=o;f++;if(f>text.length*2){clearInterval(id);el.textContent=text;}
  },spd);
}

// ══════════════════════════════════════════════════════════════
// MAGNETIC
// ══════════════════════════════════════════════════════════════
function initMag(){
  document.querySelectorAll('.mbtn').forEach(function(b){
    b.addEventListener('mousemove',function(e){
      var r=b.getBoundingClientRect();
      b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.38+'px,'+(e.clientY-r.top-r.height/2)*.38+'px)';
    });
    b.addEventListener('mouseleave',function(){b.style.transform='';});
  });
}

// ══════════════════════════════════════════════════════════════
// 3D TILT
// ══════════════════════════════════════════════════════════════
function initTilt(){
  document.querySelectorAll('.tilt').forEach(function(c){
    c.addEventListener('mousemove',function(e){
      var r=c.getBoundingClientRect();
      var x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      c.style.transform='perspective(650px) rotateX('+(-y*14)+'deg) rotateY('+(x*14)+'deg)';
    });
    c.addEventListener('mouseleave',function(){c.style.transform='';});
  });
}

// ══════════════════════════════════════════════════════════════
// ILLUMINATE ENGINE
// ══════════════════════════════════════════════════════════════
var ilSections=[];
var ilState={locked:false,active:null,buf:0,exitBuf:0};
var IL_PER_WORD=55,IL_EXIT=200,IL_ENTER_VH=0.45;

function ilBuildSection(container){
  var texts=container.querySelectorAll('.illuminate-text');
  var words=[];
  texts.forEach(function(txt){
    var raw=txt.innerHTML;
    var out=raw.replace(/(<[^>]+>)|([^\s<]+)/g,function(m,tag,word){
      if(tag)return tag;
      if(word)return '<span class="iword">'+word+'</span>';
      return m;
    });
    txt.innerHTML=out;
    txt.querySelectorAll('.iword').forEach(function(w){words.push(w);});
  });
  var bar=container.querySelector('.read-progress-bar');
  var total=words.length;
  return{
    el:container,words:words,total:total,lit:0,done:false,
    setLit:function(n){
      n=Math.max(0,Math.min(this.total,n));
      for(var i=0;i<this.total;i++){this.words[i].classList.toggle('lit',i<n);}
      this.lit=n;this.done=(n>=this.total);
      if(bar)bar.style.height=(n/this.total*100)+'%';
    }
  };
}

function ilInit(){
  ilSections=[];ilState.locked=false;ilState.active=null;ilState.buf=0;ilState.exitBuf=0;
  document.querySelectorAll('.illuminate-section').forEach(function(sec){ilSections.push(ilBuildSection(sec));});
}

function ilFindNear(){
  var vh=window.innerHeight,best=null,bestDist=Infinity;
  for(var i=0;i<ilSections.length;i++){
    var s=ilSections[i],r=s.el.getBoundingClientRect();
    if(r.bottom<=0||r.top>=vh)continue;
    var cy=r.top+r.height/2,dist=Math.abs(cy-vh/2);
    if(dist<bestDist){bestDist=dist;best=s;}
  }
  return(bestDist<vh*IL_ENTER_VH)?best:null;
}

function ilSnapTo(sec){
  var r=sec.el.getBoundingClientRect();
  var cy=r.top+r.height/2;
  var tgt=window.scrollY+cy-window.innerHeight/2;
  window.scrollTo({top:Math.max(0,tgt),behavior:'smooth'});
}

function ilHandleWheel(e){
  var dy=e.deltaY||0;
  if(ilState.locked&&ilState.active){
    e.preventDefault();
    var sec=ilState.active;
    if(dy<0){
      ilState.exitBuf=0;ilState.buf+=dy;
      var unlit=Math.floor(-ilState.buf/IL_PER_WORD);
      if(unlit>0){ilState.buf+=unlit*IL_PER_WORD;sec.setLit(sec.lit-unlit);}
      if(sec.lit===0){ilState.locked=false;ilState.active=null;ilState.buf=0;ilState.exitBuf=0;}
      return;
    }
    if(sec.done){
      ilState.exitBuf+=dy;
      if(ilState.exitBuf>=IL_EXIT){ilState.locked=false;ilState.active=null;ilState.buf=0;ilState.exitBuf=0;}
      return;
    }
    ilState.buf+=dy;
    var light=Math.floor(ilState.buf/IL_PER_WORD);
    if(light>0){ilState.buf-=light*IL_PER_WORD;sec.setLit(sec.lit+light);}
    return;
  }
  if(dy<=0)return;
  var near=ilFindNear();
  if(!near||near.done)return;
  e.preventDefault();
  ilState.locked=true;ilState.active=near;ilState.buf=0;ilState.exitBuf=0;
  ilSnapTo(near);
}

addEventListener('wheel',function(e){ilHandleWheel(e);},{passive:false});
var _touchY=0;
addEventListener('touchstart',function(e){_touchY=e.touches[0].clientY;},{passive:true});
addEventListener('touchmove',function(e){
  var dy=_touchY-e.touches[0].clientY;_touchY=e.touches[0].clientY;
  var fake={deltaY:dy,preventDefault:function(){try{e.preventDefault();}catch(x){}}};
  ilHandleWheel(fake);
},{passive:false});
addEventListener('resize',function(){if(ilState.locked&&ilState.active)ilSnapTo(ilState.active);});