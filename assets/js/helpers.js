// ══════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!==undefined)e.innerHTML=h;return e;}
function div(c,h){return el('div',c,h);}
function buildSH(content,fs){var d=div('sh');d.style.fontSize=fs||'clamp(40px,6vw,72px)';d.innerHTML=content;return d;}

function buildTicker(){
  var items=["Full Stack Dev","AI Engineering","Machine Learning","Computer Vision","Data Science","UI/UX Design","Cloud & DevOps","Research & Dev","Systems Design","NLP & Text AI"];
  var track=div('mq-track');
  items.concat(items).forEach(function(t){
    var s=el('span','mq-item');s.textContent=t;
    var dot=el('span','mq-dot','◆');s.appendChild(dot);track.appendChild(s);
  });
  var wrap=div('mq-wrap');wrap.appendChild(track);return wrap;
}

function buildGallery(items){
  var wrap=div('gal-wrap');
  var ctrl=div('gal-ctrl');
  var lbl=el('span','gal-lbl','Gallery — (01/'+items.length+')');
  var arrows=div('gal-arrows');
  var prev=el('button','garr','←'),next=el('button','garr','→');
  var idx=0;
  function upd(){lbl.textContent='Gallery — ('+String(idx+1).padStart(2,'0')+'/'+items.length+')';var cw=track.querySelector('.gal-card');var cWidth=cw?cw.offsetWidth:innerWidth/3;track.style.transform='translateX(-'+(idx*cWidth)+'px)';}
  prev.addEventListener('click',function(){idx=Math.max(idx-1,0);upd();});
  next.addEventListener('click',function(){idx=Math.min(idx+1,items.length-1);upd();});
  arrows.appendChild(prev);arrows.appendChild(next);ctrl.appendChild(lbl);ctrl.appendChild(arrows);
  var vp=div('gal-vp');var track=div('gal-track');
  items.forEach(function(w){
    var card=div('gal-card tilt');
    var img=div('gal-img');img.style.background=w.bg;img.textContent=w.em;
    var ov=div('gal-ov','<div class="gal-title">'+w.title+'</div><div class="gal-sub">'+w.cats.join(' · ')+'</div>');
    card.appendChild(img);card.appendChild(ov);track.appendChild(card);
  });
  vp.appendChild(track);wrap.appendChild(ctrl);wrap.appendChild(vp);return wrap;
}

function buildFooter(){
  var f=el('footer');
  f.innerHTML='<div class="ft-grid"><div><div class="ft-logo">CHIRAG<br>NAGVEKAR</div><p class="ft-desc">Full Stack Developer & AI Engineer from Mumbai. Building intelligent systems and scalable applications with intention and care.</p></div><div><div class="ft-head">(Navigation)</div><ul class="ft-links"><li><a href="#" onclick="navTo(\'home\')">Home</a></li><li><a href="#" onclick="navTo(\'works\')">Works</a></li><li><a href="#" onclick="navTo(\'about\')">About</a></li><li><a href="#" onclick="navTo(\'blog\')">Blog</a></li><li><a href="#" onclick="navTo(\'certs\')">Certificates</a></li><li><a href="#" onclick="navTo(\'contact\')">Contact</a></li></ul></div><div><div class="ft-head">(Connect)</div><ul class="ft-links"><li><a href="https://github.com/RyomenSukuna25" target="_blank">GitHub ↗</a></li><li><a href="https://linkedin.com/in/chirag-nagvekar-b240162b0" target="_blank">LinkedIn ↗</a></li><li><a href="https://medium.com/@chiragdnagvekar" target="_blank">Medium ↗</a></li><li><a href="mailto:chiragdnagvekar@email.com">Email ↗</a></li></ul></div><div><div class="ft-head">(Newsletter)</div><p class="ft-nl-txt">Get updates on latest projects and writing.</p><div class="ft-nl-row"><input class="ft-nl-in" type="email" placeholder="Your email"/><button class="ft-nl-btn">→</button></div></div></div><div class="ft-bot"><span class="ft-copy">© 2025 CHIRAG NAGVEKAR — ALL RIGHTS RESERVED</span><div class="ft-leg"><a href="#">Privacy</a><a href="#">Terms</a></div></div>';
  return f;
}

function buildSkills(){
  var skl=div('skill-list');
  [{n:"Languages",t:["Java","Python","Kotlin","JavaScript","SQL"]},{n:"Web & APIs",t:["HTML/CSS","REST APIs","Node.js"]},{n:"AI / ML",t:["TensorFlow","Computer Vision","NLP","Keras"]},{n:"Cloud & DB",t:["AWS","Azure","MySQL","MongoDB"]},{n:"Tools",t:["Figma","Git","GitHub","VS Code"]}].forEach(function(r){
    skl.appendChild(div('skill-row','<span class="skill-name">'+r.n+'</span><div class="skill-tags">'+r.t.map(function(t){return'<span class="skill-tag">'+t+'</span>';}).join('')+'</div>'));
  });
  return skl;
}

function buildFaqs(){
  var acc=div('faq-acc');
  FD.forEach(function(f,i){
    var item=div('faq-item');
    var q=div('faq-q',f.q+'<span class="faq-ico">+</span>');
    var body=div('faq-body','<div class="faq-ans">'+f.a+'</div>');
    q.addEventListener('click',function(){if(openFaq!==null&&openFaq!==i){var p=acc.children[openFaq];if(p)p.classList.remove('open');}item.classList.toggle('open');openFaq=item.classList.contains('open')?i:null;});
    item.appendChild(q);item.appendChild(body);acc.appendChild(item);
  });
  return acc;
}

function buildBlogCards(items){
  var grid=div('blog-grid');
  items.forEach(function(b){
    var card=el('a','blog-card'+(b.span2?' span2':''),'');
    if(b.url){
      card.href=b.url;card.target='_blank';card.rel='noopener noreferrer';
    } else {
      card.href='#';card.addEventListener('click',function(e){e.preventDefault();openBlogModal(b);});
    }
    var thumb=div('blog-thumb');thumb.style.aspectRatio=b.span2?'16/7':'16/9';
    var img=div('blog-img');img.style.background=b.bg;img.style.fontSize=b.fs+'px';img.textContent=b.em;
    var liveBadge=b.url?'<span class="blog-live" style="background:rgba(0,0,0,.4)">Medium ↗</span>':b.live?'<span class="blog-live">Soon</span>':'';
    var body=div('blog-body','<div class="blog-cat">'+b.cat+liveBadge+'</div><div class="blog-title" style="font-size:'+(b.span2?'clamp(15px,1.5vw,20px)':'14px')+'">'+b.title+'</div><div class="blog-date">'+b.date+'</div>');
    thumb.appendChild(img);card.appendChild(thumb);card.appendChild(body);grid.appendChild(card);
  });
  return grid;
}

function openBlogModal(b){
  document.getElementById('m-title').textContent=b.title;
  var body=document.getElementById('modal-bg').querySelector('.modal-body');
  body.innerHTML='';
  var img=div('modal-img');img.style.background=b.bg;img.style.fontSize='72px';img.textContent=b.em;body.appendChild(img);
  body.appendChild(div('modal-desc','<strong style="color:var(--ink)">'+b.date+'</strong><br><br>'+b.summary+'<br><br><span style="color:var(--ink3);font-size:10px;letter-spacing:.1em">Full article coming soon on Medium.</span>'));
  body.appendChild(div('modal-tags','<span class="modal-tag">'+b.cat+'</span>'));
  var lnks=div('modal-links');
  lnks.innerHTML='<a href="'+MEDIUM_PROFILE+'" target="_blank" class="mlink ext">Visit Medium ↗</a>';
  body.appendChild(lnks);
  document.getElementById('modal-bg').style.display='flex';
}

// ══════════════════════════════════════════════════════════════
// MODALS
// ══════════════════════════════════════════════════════════════
function openModal(w){
  document.getElementById('m-title').textContent=w.title;
  var body=document.getElementById('modal-bg').querySelector('.modal-body');
  body.innerHTML='';
  var img=div('modal-img');img.style.background=w.bg;img.style.fontSize='68px';img.textContent=w.em;body.appendChild(img);
  body.appendChild(div('modal-desc',w.desc));
  body.appendChild(div('modal-tags',w.tags.map(function(t){return'<span class="modal-tag">'+t+'</span>';}).join('')));
  body.appendChild(div('','<span style="font-size:8px;color:var(--ink3);letter-spacing:.14em;text-transform:uppercase">Year · '+w.year+'</span>'));
  if(w.arch){
    var as=div('modal-section');
    as.innerHTML='<div class="modal-section-label">Architecture</div><div class="modal-section-body">'+w.arch+'</div>';
    if(w.archFlow){
      var flow=div('modal-arch-flow');
      w.archFlow.forEach(function(node,i){flow.innerHTML+='<span class="maf-node">'+node+'</span>'+(i<w.archFlow.length-1?'<span class="maf-arrow">→</span>':'');});
      as.appendChild(flow);
    }
    body.appendChild(as);
  }
  if(w.challenges){var cs=div('modal-section');cs.innerHTML='<div class="modal-section-label">Challenges</div><div class="modal-section-body">'+w.challenges+'</div>';body.appendChild(cs);}
  if(w.learned){var ls=div('modal-section');ls.innerHTML='<div class="modal-section-label">What I Learned</div><div class="modal-section-body">'+w.learned+'</div>';body.appendChild(ls);}
  var lnks=div('modal-links');
  lnks.innerHTML='<a href="'+w.github+'" target="_blank" class="mlink ext">GitHub ↗</a>'+(w.link&&w.link!='#'?'<a href="'+w.link+'" target="_blank" class="mlink prim">Live Demo ↗</a>':'<span class="mlink ghost" style="opacity:.4">Live Demo (Coming Soon)</span>');
  body.appendChild(lnks);
  document.getElementById('modal-bg').style.display='flex';
}

function closeModal(){document.getElementById('modal-bg').style.display='none';}

function openHackModal(h){
  document.getElementById('m-title').textContent=h.title+' — '+h.event;
  var body=document.getElementById('modal-bg').querySelector('.modal-body');
  body.innerHTML='';
  var img=div('modal-img');img.style.background=h.bg;img.style.fontSize='68px';img.textContent=h.em;body.appendChild(img);
  body.appendChild(div('modal-result-badge elim','⚡ '+h.resultLabel));
  body.appendChild(div('modal-desc','<strong style="color:var(--ink)">'+h.event+'</strong><br>'+h.solution));
  body.appendChild(div('modal-tags',h.stack.map(function(t){return'<span class="modal-tag">'+t+'</span>';}).join('')));
  var as=div('modal-section');
  as.innerHTML='<div class="modal-section-label">System Architecture</div><div class="modal-section-body">'+h.arch+'</div>';
  var flow=div('modal-arch-flow');
  h.archFlow.forEach(function(node,i){flow.innerHTML+='<span class="maf-node">'+node+'</span>'+(i<h.archFlow.length-1?'<span class="maf-arrow">→</span>':'');});
  as.appendChild(flow);body.appendChild(as);
  var hs=div('modal-section');hs.innerHTML='<div class="modal-section-label" style="color:var(--gold)">Critical Holdback</div><div class="modal-section-body" style="color:var(--gold);opacity:.8">'+h.holdback+'</div>';body.appendChild(hs);
  var cs=div('modal-section');cs.innerHTML='<div class="modal-section-label">Challenges</div><div class="modal-section-body">'+h.challenges+'</div>';body.appendChild(cs);
  var ls=div('modal-section');ls.innerHTML='<div class="modal-section-label">What I Learned</div><div class="modal-section-body">'+h.learned+'</div>';body.appendChild(ls);
  document.getElementById('modal-bg').style.display='flex';
}