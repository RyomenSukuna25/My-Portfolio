// ══════════════════════════════════════════════════════════════
// ABOUT
// ══════════════════════════════════════════════════════════════
function renderAbout(){
  var root=document.getElementById('page-root');root.innerHTML='';

  var hero=div('sec');
  hero.innerHTML='<div class="eye">(About Chirag)</div>';
  hero.appendChild(buildSH('<span class="sl"><span class="sw">THE</span> <span class="sw red">STORY</span></span><span class="sl"><span class="sw">OF A</span> <span class="sw dim">BUILDER</span></span>','clamp(52px,9vw,120px)'));
  root.appendChild(hero);

  var amq=div('amq-wrap');
  amq.appendChild(div('amq-track','<span>From blueprints to bytecode. From tolerances to tensors. One engineer. Two worlds. Zero limits.</span><span class="ghost"> From blueprints to bytecode. From tolerances to tensors. One engineer. Two worlds. Zero limits.</span>'));
  root.appendChild(amq);

  // ORIGIN ILLUMINATE
  var ilSec=div('sec sbor');
  ilSec.innerHTML='<div class="eye">(Origin)</div>';
  var ilGrid=div('');
  ilGrid.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:96px;align-items:start;';
  ilGrid.appendChild(buildSH('<span class="sl"><span class="sw">FROM</span> <span class="sw red">MECH</span></span><span class="sl"><span class="sw">TO</span></span><span class="sl"><span class="sw dim">MACHINE</span></span><span class="sl"><span class="sw grn">LEARNING</span></span>','clamp(44px,7vw,96px)'));
  var ilWrap=div('rv d1 illuminate-section');
  ilWrap.style.cssText='position:relative;padding-left:20px;';
  ilWrap.innerHTML='<div class="read-progress"><div class="read-progress-bar"></div></div>';
  var ilTxt=div('illuminate-text');
  ilTxt.style.cssText='font-size:13px;line-height:2.05;letter-spacing:.02em;';
  ilTxt.innerHTML='<p style="margin-bottom:18px;">I didn\'t start with code. I started with <strong>blueprints</strong>. Mechanical engineering taught me something no CS curriculum could — how to think about systems under pressure, about failure modes before they happen, about constraints as creative tools rather than obstacles.</p><p style="margin-bottom:18px;">Three lines of Python changed everything. Mid-diploma, I wrote a script to automate a lab calculation. The machine did in 0.2 seconds what took me 45 minutes by hand. I didn\'t sleep that night. I rebuilt the entire lab workflow from scratch.</p><p>That\'s when I understood: <strong>software is just engineering without the weight limits.</strong> I enrolled in Computer Science. I carried every mental model from mech into code. Today, that dual background isn\'t a liability — it\'s the thing that makes me see systems others miss.</p>';
  ilWrap.appendChild(ilTxt);
  ilGrid.appendChild(ilWrap);
  ilSec.appendChild(ilGrid);
  root.appendChild(ilSec);

  // TIMELINE
  var tlSec=div('sec salt sbor');
  tlSec.innerHTML='<div class="eye">(Timeline)</div>';
  var tlGrid=div('origin-grid');
  var tlLeft=div('');
  tlLeft.appendChild(buildSH('<span class="sl"><span class="sw">THE</span> <span class="sw red">JOURNEY</span></span><span class="sl"><span class="sw dim">YEAR BY</span></span><span class="sl"><span class="sw">YEAR</span></span>','clamp(40px,6vw,72px)'));
  var tlRight=div('rv d1 timeline');
  ORIGIN.forEach(function(o,i){
    var item=div('tl-item rv'+(i%2===0?' d1':' d2'));
    item.innerHTML='<div class="tl-dot"></div><div class="tl-year">'+o.year+'</div><div class="tl-title">'+o.title+'</div><div class="tl-desc">'+o.desc+'</div><span class="tl-tag">'+o.tag+'</span>';
    tlRight.appendChild(item);
  });
  tlGrid.appendChild(tlLeft);
  tlGrid.appendChild(tlRight);
  tlSec.appendChild(tlGrid);
  root.appendChild(tlSec);

  // SKILLS + EXPERIENCE
  var a2=div('sec sbor origin-grid');
  var left=div('rv');
  left.innerHTML='<div class="eye">(Skills)</div>';
  left.appendChild(buildSH('<span class="sl"><span class="sw">TECH</span> <span class="sw red">STACK</span></span>','clamp(36px,5vw,60px)'));
  var slDiv=div('');
  slDiv.style.marginTop='32px';
  slDiv.appendChild(buildSkills());
  left.appendChild(slDiv);
  var right=div('rv d1');
  right.innerHTML='<div class="eye">(Experience)</div>';
  right.appendChild(buildSH('<span class="sl"><span class="sw">WHERE</span> <span class="sw red">I\'VE</span></span><span class="sl"><span class="sw dim">WORKED</span></span>','clamp(36px,5vw,60px)'));
  var exGrid=div('exp-grid');
  exGrid.style.marginTop='32px';
  [
    {y:'2025',t:'Research Paper — CrowdCure',c:'Microsoft Learn Student Ambassador Club',d:'Authored AI disaster relief platform research. Presented at Paper-a-thon 2025.'},
    {y:'2023–24',t:'Engineering Contributor',c:'Team Ethan Racing Electric — Formula Bharat',d:'Software & data systems for electric formula race car at national competitions.'},
    {y:'2024',t:'Web Developer Intern',c:'Siddhi Playground Equipments',d:'Built and maintained digital operations and client-facing web systems.'},
    {y:'Pursuing',t:'B.E. CS — Data Science',c:'University of Mumbai',d:'Specialising in AI/ML, system design, and full-stack engineering.'}
  ].forEach(function(e,i){
    exGrid.appendChild(div('rv exp-card'+(i%2===1?' d1':''),'<div class="exp-year">'+e.y+'</div><div class="exp-title">'+e.t+'</div><div class="exp-co">'+e.c+'</div><div class="exp-desc">'+e.d+'</div>'));
  });
  right.appendChild(exGrid);
  a2.appendChild(left);
  a2.appendChild(right);
  root.appendChild(a2);

  // CTA
  var ctaSec=div('cta-sec');
  ctaSec.style.minHeight='380px';
  ctaSec.innerHTML='<div class="cta-glow"></div>';
  var ci=div('cta-inner');
  ci.appendChild(buildSH('<span class="sl"><span class="sw">LET\'S BUILD</span></span><span class="sl"><span class="sw red">TOGETHER.</span></span>','clamp(52px,9vw,120px)'));
  var cb=div('cta-btns');
  var cb1=el('a','mbtn prim','<span>Start a Project</span><span class="marr">→</span>');
  cb1.href='#';cb1.onclick=function(){navTo('contact');return false;};
  var cb2=el('a','mbtn ghost','<span>View My Work</span>');
  cb2.href='#';cb2.onclick=function(){navTo('works');return false;};
  cb.appendChild(cb1);cb.appendChild(cb2);
  ci.appendChild(cb);
  ctaSec.appendChild(ci);
  root.appendChild(ctaSec);
  root.appendChild(buildFooter());
  initObservers();
}

// ══════════════════════════════════════════════════════════════
// WORKS
// ══════════════════════════════════════════════════════════════
function renderWorks(){
  var root=document.getElementById('page-root');root.innerHTML='';worksFilter='All';

  var hero=div('sec');
  hero.style.paddingBottom='48px';
  hero.innerHTML='<div class="eye">(All Works)</div>';
  hero.appendChild(buildSH('<span class="sl"><span class="sw">SELECTED</span></span><span class="sl"><span class="sw red">PROJECTS</span></span>','clamp(56px,10vw,130px)'));
  var ilWrap=div('rv illuminate-section');
  ilWrap.style.cssText='position:relative;padding-left:18px;margin-top:28px;';
  ilWrap.innerHTML='<div class="read-progress"><div class="read-progress-bar"></div></div>';
  var ilTxt=div('illuminate-text');
  ilTxt.style.cssText='font-size:11px;color:var(--ink3);line-height:2;letter-spacing:.04em;max-width:600px;';
  ilTxt.textContent='Four projects. Each one built from a real problem. Click any row to open full details — architecture, challenges, and what I learned.';
  ilWrap.appendChild(ilTxt);
  hero.appendChild(ilWrap);
  root.appendChild(hero);

  var fSec=div('sec');
  fSec.style.paddingTop='0';
  var filters=div('');
  filters.style.cssText='display:flex;gap:3px;margin-bottom:40px;flex-wrap:wrap;';
  var cats=['All','AI/ML','Full Stack','Engineering'];
  var fBtns={};
  cats.forEach(function(c){
    var btn=el('button','filter-btn'+(c==='All'?' act':''),c);
    btn.style.padding='10px 20px';
    btn.addEventListener('click',function(){
      worksFilter=c;
      cats.forEach(function(x){fBtns[x].classList.toggle('act',x===c);});
      rebuildWL();
    });
    fBtns[c]=btn;
    filters.appendChild(btn);
  });
  fSec.appendChild(filters);
  var wLW=div('work-list');
  wLW.id='wlw';
  fSec.appendChild(wLW);
  root.appendChild(fSec);

  function rebuildWL(){
    wLW.innerHTML='';
    var list=worksFilter==='All'?WD:WD.filter(function(w){return w.cats.some(function(c){return c.includes(worksFilter);});});
    list.forEach(function(w){
      var row=div('rv work-row','<span class="wnum">'+w.num+'</span><div class="wtitle">'+w.title+'<span class="wlink-badge">GitHub ↗</span></div><span class="wyear">'+w.year+'</span><div class="wcats">'+w.cats.map(function(c){return'<span class="wcat">'+c+'</span>';}).join('')+'</div>');
      var prev=document.getElementById('wprev');
      row.addEventListener('mouseenter',function(){
        document.getElementById('wprev-img').style.background=w.bg;
        document.getElementById('wprev-img').textContent=w.em;
        document.getElementById('wprev-tag').textContent=w.cats[0];
        prev.classList.remove('off');prev.classList.add('on');
      });
      row.addEventListener('mouseleave',function(){prev.classList.remove('on');prev.classList.add('off');});
      row.addEventListener('mousemove',function(e){prev.style.left=(e.clientX+24)+'px';prev.style.top=(e.clientY-72)+'px';});
      row.addEventListener('click',function(){openModal(w);});
      wLW.appendChild(row);
    });
    setTimeout(function(){wLW.querySelectorAll('.rv').forEach(function(el){el.classList.add('v');});},60);
    bindHover();initMag();
  }
  rebuildWL();
  root.appendChild(buildGallery(WD));

  var ctaSec=div('cta-sec');
  ctaSec.style.minHeight='340px';
  ctaSec.innerHTML='<div class="cta-glow"></div>';
  var ci=div('cta-inner');
  ci.appendChild(buildSH('<span class="sl"><span class="sw">HAVE A PROJECT</span></span><span class="sl"><span class="sw red">IN MIND?</span></span>','clamp(44px,8vw,110px)'));
  var cb=div('cta-btns');
  var b=el('a','mbtn prim','<span>Let\'s Work Together</span><span class="marr">→</span>');
  b.href='#';b.onclick=function(){navTo('contact');return false;};
  cb.appendChild(b);
  ci.appendChild(cb);
  ctaSec.appendChild(ci);
  root.appendChild(ctaSec);
  root.appendChild(buildFooter());
  initObservers();
}

// ══════════════════════════════════════════════════════════════
// BLOG
// ══════════════════════════════════════════════════════════════
function renderBlog(){
  var root=document.getElementById('page-root');root.innerHTML='';

  var sec=div('sec');
  sec.innerHTML='<div class="eye">(Blog & Insights)</div>';
  var sSH=buildSH('<span class="sl"><span class="sw">THOUGHTS,</span></span><span class="sl"><span class="sw red">WRITING,</span></span><span class="sl"><span class="sw dim">IDEAS.</span></span>','clamp(52px,9.5vw,130px)');
  sSH.style.marginBottom='28px';
  sec.appendChild(sSH);

  var ilWrap=div('rv illuminate-section');
  ilWrap.style.cssText='position:relative;padding-left:18px;margin:0 0 52px;max-width:650px;';
  ilWrap.innerHTML='<div class="read-progress"><div class="read-progress-bar"></div></div>';
  var ilTxt=div('illuminate-text');
  ilTxt.style.cssText='font-size:11px;line-height:2;letter-spacing:.04em;';
  ilTxt.textContent='Five pieces on AI, engineering, and career pivots. Live articles open directly on Medium. Click any card to read.';
  ilWrap.appendChild(ilTxt);
  var medBtn=el('a','mbtn ghost','<span>All Articles on Medium ↗</span>');
  medBtn.href=MEDIUM_PROFILE;
  medBtn.target='_blank';
  medBtn.rel='noopener noreferrer';
  medBtn.style.cssText='display:inline-flex;margin-top:24px;';
  ilWrap.appendChild(medBtn);
  sec.appendChild(ilWrap);

  sec.appendChild(buildBlogCards(BD));
  root.appendChild(sec);
  root.appendChild(buildFooter());
  initObservers();
}

// ══════════════════════════════════════════════════════════════
// CERTIFICATES
// ══════════════════════════════════════════════════════════════
function renderCerts(){
  var root=document.getElementById('page-root');root.innerHTML='';

  var sec=div('sec');
  sec.innerHTML='<div class="eye">(Certificates & Credentials)</div>';
  var cSH=buildSH('<span class="sl"><span class="sw">VERIFIED</span></span><span class="sl"><span class="sw red">SKILLS</span> <span class="sw dim">& CREDS</span></span>','clamp(52px,9.5vw,130px)');
  cSH.style.marginBottom='20px';
  sec.appendChild(cSH);

  var ilWrap=div('rv illuminate-section');
  ilWrap.style.cssText='position:relative;padding-left:18px;margin:0 0 52px;max-width:700px;';
  ilWrap.innerHTML='<div class="read-progress"><div class="read-progress-bar"></div></div>';
  var ilTxt=div('illuminate-text');
  ilTxt.style.cssText='font-size:11px;line-height:2;letter-spacing:.04em;';
  ilTxt.textContent='Not collected for show. Every certification here was chased because it filled a real gap — either in a project I was building or a domain I needed to go deeper in. Click any card to verify.';
  ilWrap.appendChild(ilTxt);
  sec.appendChild(ilWrap);

  var cgrid=div('cert-grid');
  CERTS.forEach(function(c,i){
    var card=div('rv tilt cert-card'+(i%3===1?' d1':i%3===2?' d2':''));
    card.innerHTML='<div class="cert-badge">'+c.badge+'</div><div class="cert-ico">'+c.ico+'</div><div class="cert-issuer">'+c.issuer+'</div><div class="cert-name">'+c.name+'</div><div class="cert-date">'+c.date+'</div>';
    card.addEventListener('click',function(){window.open(c.verify,'_blank');});
    cgrid.appendChild(card);
  });
  sec.appendChild(cgrid);

  var note=div('rv');
  note.innerHTML='<p style="font-size:10px;color:var(--ink3);letter-spacing:.06em;line-height:1.8;margin-top:32px;border:1px solid rgba(255,60,60,.08);padding:24px;max-width:600px;">📌 More credentials being added. If you need an original certificate for verification, reach out directly — I keep all originals on file.</p>';
  sec.appendChild(note);

  root.appendChild(sec);
  root.appendChild(buildFooter());
  initObservers();
}

// ══════════════════════════════════════════════════════════════
// CONTACT
// ══════════════════════════════════════════════════════════════
function renderContact(){
  var root=document.getElementById('page-root');root.innerHTML='';

  var hero=div('sec');
  hero.innerHTML='<div class="eye">(Get In Touch)</div>';
  var sSH=buildSH('<span class="sl"><span class="sw">LET\'S</span> <span class="sw red">WORK</span></span><span class="sl"><span class="sw dim">TOGETHER.</span></span>','clamp(52px,9.5vw,130px)');
  sSH.style.marginBottom='12px';
  hero.appendChild(sSH);

  var subLine=div('rv d1');
  subLine.style.cssText='font-size:13px;color:rgba(232,228,220,.55);max-width:520px;line-height:1.8;letter-spacing:.02em;margin-bottom:48px;';
  subLine.textContent='Have a project in mind, want to hire, or just connect? I respond within 24 hours.';
  hero.appendChild(subLine);

  var cgrid=div('');
  cgrid.style.cssText='display:grid;grid-template-columns:1fr 1.1fr;gap:80px;align-items:start;';

  // LEFT — info
  var infoCol=div('rv');
  var statusBar=div('');
  statusBar.style.cssText='display:flex;align-items:center;gap:10px;padding:14px 18px;border:1px solid rgba(57,255,158,.2);background:rgba(57,255,158,.05);margin-bottom:28px;';
  statusBar.innerHTML='<span style="width:7px;height:7px;border-radius:50%;background:var(--g);box-shadow:0 0 10px var(--g);animation:lpulse 2s infinite;flex-shrink:0;display:inline-block;"></span><span style="font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:rgba(232,228,220,.75);">Open to projects &amp; opportunities</span>';
  infoCol.appendChild(statusBar);

  var cinfo=div('contact-info');
  [
    {l:'Email',    v:'<a href="mailto:chiragdnagvekar@email.com">chiragdnagvekar@email.com</a>'},
    {l:'Location', v:'Mumbai, India · GMT+5:30'},
    {l:'LinkedIn', v:'<a href="https://linkedin.com/in/chirag-nagvekar-b240162b0" target="_blank">chirag-nagvekar ↗</a>'},
    {l:'GitHub',   v:'<a href="https://github.com/RyomenSukuna25" target="_blank">RyomenSukuna25 ↗</a>'},
    {l:'Response', v:'Within 24–48 hours'}
  ].forEach(function(r){
    cinfo.appendChild(div('ci-row','<div class="ci-lbl">'+r.l+'</div><div class="ci-val">'+r.v+'</div>'));
  });
  infoCol.appendChild(cinfo);

  var socRow=div('rv d1');
  socRow.style.cssText='display:flex;gap:8px;margin-top:24px;flex-wrap:wrap;';
  [
    {label:'GitHub ↗',   url:'https://github.com/RyomenSukuna25'},
    {label:'LinkedIn ↗', url:'https://linkedin.com/in/chirag-nagvekar-b240162b0'},
    {label:'Email ↗',    url:'mailto:chiragdnagvekar@email.com'}
  ].forEach(function(s){
    var a=el('a','mbtn ghost','<span>'+s.label+'</span>');
    a.href=s.url;
    if(s.url.indexOf('mailto')<0)a.target='_blank';
    a.style.fontSize='8px';
    a.style.padding='10px 18px';
    socRow.appendChild(a);
  });
  infoCol.appendChild(socRow);
  cgrid.appendChild(infoCol);

  // RIGHT — form
  var formCol=div('rv d1');
  if(contactSent){
    formCol.innerHTML='<div class="sent-wrap"><div class="sent-ico">✓</div><div class="sent-title">MESSAGE SENT!</div><p class="sent-sub">I\'ll get back within 24–48 hours.</p></div>';
  } else {
    var fi=div('');
    fi.style.cssText='background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.08);padding:36px 32px;';
    var fTitle=div('');
    fTitle.style.cssText='font-family:var(--bebas);font-size:18px;letter-spacing:.1em;color:rgba(232,228,220,.9);margin-bottom:28px;border-bottom:1px solid rgba(255,60,60,.12);padding-bottom:14px;';
    fTitle.textContent='SEND A MESSAGE';
    fi.appendChild(fTitle);
    [
      {l:'Your Name',      t:'text',  p:'John Doe'},
      {l:'Email Address',  t:'email', p:'john@example.com'},
      {l:'Subject',        t:'text',  p:'Project inquiry...'}
    ].forEach(function(f){
      var field=div('field');
      field.innerHTML='<label class="field-lbl">'+f.l+'</label><input class="field-in" type="'+f.t+'" placeholder="'+f.p+'"/>';
      fi.appendChild(field);
    });
    var msgField=div('field');
    msgField.innerHTML='<label class="field-lbl">Message</label><textarea class="field-in" placeholder="Tell me about your project, goals, timeline, and budget..."></textarea>';
    fi.appendChild(msgField);
    var sub=el('button','form-btn','<span>Send Message →</span>');
    sub.addEventListener('click',function(){contactSent=true;renderContact();});
    fi.appendChild(sub);
    formCol.appendChild(fi);
  }
  cgrid.appendChild(formCol);
  hero.appendChild(cgrid);
  root.appendChild(hero);
  root.appendChild(buildFooter());
  initObservers();
}