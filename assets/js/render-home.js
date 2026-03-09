// ══════════════════════════════════════════════════════════════
// HOME
// ══════════════════════════════════════════════════════════════
function renderHome(){
  var root=document.getElementById('page-root');root.innerHTML='';

  // HERO
  var hero=div('hero');
  hero.innerHTML=`
    <div class="hero-tag"><span class="hero-dot"></span>Available for Projects &nbsp;·&nbsp; Mumbai, India &nbsp;·&nbsp; GMT+5:30</div>
    <div class="badge-wrap">
      <svg viewBox="0 0 120 120" style="width:120px;height:120px;animation:spin 14s linear infinite;">
        <defs><path id="cp" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"/></defs>
        <text font-family="Space Mono" font-size="9.2" fill="rgba(232,228,220,0.3)" letter-spacing="3.5">
          <textPath href="#cp">CN · PORTFOLIO · 2025 · FULL STACK · AI ·</textPath>
        </text>
        <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(255,60,60,0.14)" stroke-width="1"/>
        <circle cx="60" cy="60" r="34" fill="rgba(255,60,60,0.035)" stroke="rgba(255,60,60,0.1)" stroke-width="1"/>
        <text x="60" y="64" text-anchor="middle" font-family="Bebas Neue" font-size="18" fill="rgba(232,228,220,0.85)" letter-spacing="2">CN</text>
      </svg>
    </div>
    <div class="hero-main">
      <h1 class="hero-h">
        <span class="hline hl1"><span class="hword">FULL STACK</span></span>
        <span class="hline hl2"><span class="hword hred">DEVELOPER</span> <span class="hword" style="-webkit-text-stroke:1px rgba(232,228,220,.2);color:transparent;">&</span></span>
        <span class="hline hl3"><span class="hword" style="font-size:.62em;letter-spacing:.05em;">AI ENGINEER</span></span>
      </h1>
      <div class="hero-strip">
        <div class="hs-item"><div class="hs-big"><span class="counter" data-target="5">0</span><span class="hs-suf">+</span></div><div class="hs-lbl">Projects</div></div>
        <div class="hs-item"><div class="hs-big"><span class="counter" data-target="2">0</span><span class="hs-suf">+</span></div><div class="hs-lbl">Papers</div></div>
        <div class="hs-item"><div class="hs-big"><span class="counter" data-target="3">0</span><span class="hs-suf">+</span></div><div class="hs-lbl">Years Eng.</div></div>
        <div class="hs-item"><div class="hs-big"><span class="counter" data-target="1">0</span><span class="hs-suf">+</span></div><div class="hs-lbl">Hackathon</div></div>
      </div>
      <div class="hero-bot">
        <div>
          <p class="hero-desc" style="font-size:13px;line-height:1.9;">Building <strong style="color:var(--ink)">automation systems, ML tools,</strong><br>and hackathon-scale platforms.<br><span style="color:var(--ink3);font-size:11px;letter-spacing:.04em;">Mumbai &nbsp;·&nbsp; Open to collaboration</span></p>
          <div class="hero-cta-row">
            <a href="#" class="mbtn prim" onclick="navTo('works');return false;"><span>View Projects</span><span class="marr">→</span></a>
            <a href="https://github.com/RyomenSukuna25" target="_blank" class="mbtn ghost"><span>GitHub</span><span class="marr">↗</span></a>
            <a href="#" class="mbtn ghost" onclick="navTo('contact');return false;"><span>Contact</span></a>
          </div>
        </div>
        <div class="hero-scroll"><div class="hero-scroll-line"></div><span class="hero-scroll-txt">Scroll</span></div>
        <div class="hero-meta">MUMBAI · INDIA<br>B.E. CS — DATA SCIENCE<br>UNIVERSITY OF MUMBAI<br>OPEN TO HIRE</div>
      </div>
    </div>
  `;
  root.appendChild(hero);
  root.appendChild(buildTicker());

  // ABOUT SNIP
  var aSnip=div('sec sbor');aSnip.innerHTML='<div class="eye">(About Me)</div>';
  var aGrid=div('');aGrid.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:96px;align-items:start;';
  aGrid.appendChild(buildSH('<span class="sl"><span class="sw">MULTI</span><span class="sw red">DISC</span></span><span class="sl"><span class="sw">IPLINARY</span></span><span class="sl"><span class="sw dim">ENGINEER</span></span>','clamp(44px,7.5vw,100px)'));
  var aRight=div('rv d1');
  var ilWrap=div('illuminate-section');ilWrap.style.cssText='position:relative;padding-left:20px;';
  ilWrap.innerHTML='<div class="read-progress"><div class="read-progress-bar"></div></div>';
  var ilTxt=div('illuminate-text');ilTxt.style.cssText='font-size:13px;line-height:2;letter-spacing:.02em;';
  ilTxt.innerHTML="I'm <strong>Chirag Nagvekar</strong> — a CS engineer from Mumbai specialising in Data Science and AI. I combine systems-thinking from Mechanical Engineering with modern software development to build things that actually work in the real world. Co-author of <strong>CrowdCure</strong> — an AI disaster relief platform — and contributor to <strong>Formula Bharat's electric race car team</strong>. My background isn't conventional. I started in mechanical engineering, switched mid-stream, and that pivot became my greatest technical advantage.";
  ilWrap.appendChild(ilTxt);
  var readBtn=el('a','mbtn ghost','<span>Full Story →</span>');readBtn.style.cssText='display:inline-flex;margin-top:28px;';readBtn.href='#';readBtn.onclick=function(){navTo('about');return false;};
  ilWrap.appendChild(readBtn);aRight.appendChild(ilWrap);aGrid.appendChild(aRight);aSnip.appendChild(aGrid);root.appendChild(aSnip);

  // WORKS
  var wSec=div('sec salt sbor');wSec.style.cssText='padding-top:80px;padding-bottom:0;';
  var wTop=div('');wTop.style.cssText='display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:44px;flex-wrap:wrap;gap:16px;';
  var wL=div('');wL.innerHTML='<div class="eye">(Selected Work)</div>';wL.appendChild(buildSH('<span class="sl"><span class="sw">RECENT</span> <span class="sw dim">WORK</span></span>','clamp(40px,6vw,72px)'));
  var seall=el('a','see-all','ALL PROJECTS →');seall.href='#';seall.onclick=function(){navTo('works');return false;};
  wTop.appendChild(wL);wTop.appendChild(seall);wSec.appendChild(wTop);
  var wList=div('work-list');
  WD.slice(0,3).forEach(function(w){
    var row=div('rv work-row','<span class="wnum">'+w.num+'</span><div><div class="wtitle">'+w.title+'</div><div style="font-size:8px;color:var(--ink3);letter-spacing:.1em;margin-top:3px;">'+w.tags.slice(0,3).join(' · ')+'</div></div><span class="wyear">'+w.year+'</span><div class="wcats">'+w.cats.slice(0,2).map(function(c){return'<span class="wcat">'+c+'</span>';}).join('')+'</div>');
    row.addEventListener('click',function(){openModal(w);});wList.appendChild(row);
  });
  wSec.appendChild(wList);wSec.appendChild(buildGallery(WD));root.appendChild(wSec);

  // HACKATHONS
  var hSec=div('sec sbor');hSec.innerHTML='<div class="eye">(Hackathons)</div>';
  var hSH=buildSH('<span class="sl"><span class="sw">HACK</span><span class="sw red">ATHONS</span></span>','clamp(44px,7vw,96px)');
  hSH.style.marginBottom='12px';hSec.appendChild(hSH);
  hSec.appendChild(div('rv','<p style="font-size:11px;color:var(--ink3);letter-spacing:.04em;line-height:1.9;margin-bottom:48px;max-width:560px;">Where ideas get stress-tested in 24 hours. Win or lose, these are the builds that taught me the most.</p>'));
  var hGrid=div('rv d1 hack-grid');
  HD.forEach(function(h){
    var card=div('hack-card tilt');
    card.innerHTML='<div class="hack-event">'+h.event+' · '+h.year+'</div><div class="hack-title">'+h.title+'</div><div class="hack-result">⚡ '+h.resultLabel+'</div><div class="hack-label">Problem</div><div class="hack-val">'+h.problem+'</div><div class="hack-label">Solution</div><div class="hack-val">'+h.solution+'</div><div class="hack-label">Stack</div><div class="hack-stack">'+h.stack.map(function(s){return'<span class="hack-tag">'+s+'</span>';}).join('')+'</div><div class="hack-open">Full Case Study →</div>';
    card.querySelector('.hack-open').addEventListener('click',function(){openHackModal(h);});
    hGrid.appendChild(card);
  });
  hSec.appendChild(hGrid);root.appendChild(hSec);

  // GITHUB STATS
  var ghSec=div('sec salt sbor');ghSec.innerHTML='<div class="eye">(GitHub Activity)</div>';
  var ghSH=buildSH('<span class="sl"><span class="sw">CODE</span> <span class="sw red">ACTIVITY</span></span>','clamp(40px,6vw,72px)');
  ghSH.style.marginBottom='8px';ghSec.appendChild(ghSH);
  ghSec.appendChild(div('rv','<p style="font-size:10px;color:var(--ink3);letter-spacing:.04em;margin-bottom:0;">github.com/RyomenSukuna25</p>'));
  var ghWrap=div('rv d1 gh-wrap');var ghGrid=div('gh-grid');
  [{n:12,s:'+',l:'Repositories'},{n:340,s:'+',l:'Total Commits'},{n:8,s:'+',l:'Languages Used'}].forEach(function(g){
    ghGrid.appendChild(div('gh-card','<div class="gh-num"><span class="counter" data-target="'+g.n+'">0</span><span class="gh-suf">'+g.s+'</span></div><div class="gh-lbl">'+g.l+'</div>'));
  });
  var langCard=div('gh-card');langCard.style.gridColumn='span 3';
  langCard.innerHTML='<div class="gh-lbl" style="margin-bottom:18px;">Top Languages</div><div class="gh-langs" id="gh-langs"></div>';
  ghGrid.appendChild(langCard);ghWrap.appendChild(ghGrid);ghSec.appendChild(ghWrap);root.appendChild(ghSec);
  setTimeout(function(){
    var langs=[{name:'Python',pct:42,color:'#3c8fff'},{name:'JavaScript',pct:28,color:'#f5c842'},{name:'Java',pct:14,color:'#ff3c3c'},{name:'HTML/CSS',pct:10,color:'#39ff9e'},{name:'SQL',pct:6,color:'rgba(232,228,220,.4)'}];
    var wrap=document.getElementById('gh-langs');
    if(wrap){langs.forEach(function(l){wrap.appendChild(div('gh-lang-row','<span class="gh-lang-name">'+l.name+'</span><div class="gh-lang-bar-wrap"><div class="gh-lang-bar" data-pct="'+l.pct+'" style="background:'+l.color+'"></div></div><span class="gh-lang-pct">'+l.pct+'%</span>'));});
    var barObs=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){wrap.querySelectorAll('.gh-lang-bar').forEach(function(b){b.style.width=b.dataset.pct+'%';});barObs.unobserve(e.target);}});},{threshold:.3});
    barObs.observe(wrap);}
  },100);

  // SERVICES
  var svSec=div('sec sbor');svSec.innerHTML='<div class="eye">(Services)</div>';
  var svSH=buildSH('<span class="sl"><span class="sw">WHAT I</span> <span class="sw red">BUILD</span></span>','clamp(44px,7vw,96px)');
  svSH.style.marginBottom='56px';svSec.appendChild(svSH);
  var svgrid=div('svc-grid');
  [{n:"01",i:"⚡",t:"Full Stack Dev",d:"End-to-end web apps with modern stacks, REST APIs, production-ready databases.",li:["Responsive Web Apps","REST API Architecture","Database Design","CI/CD & Deployment"]},
   {n:"02",i:"🤖",t:"AI & ML Engineering",d:"Custom ML models, computer vision systems, and NLP pipelines that solve real problems.",li:["Model Training & Deploy","Computer Vision","NLP & Classification","Data Pipelines"]},
   {n:"03",i:"🎨",t:"UI/UX Design",d:"Clean, functional interfaces in Figma. Bridging aesthetics and usability.",li:["Wireframes & Prototypes","Design Systems","Mobile-First","Interaction Design"]},
   {n:"04",i:"☁️",t:"Cloud & Data",d:"Deploy on AWS or Azure. Dashboards and pipelines that transform raw data into decisions.",li:["AWS / Azure Setup","Real-time Dashboards","ETL Pipelines","MongoDB & MySQL"]}
  ].forEach(function(s){
    var c=div('rv tilt');c.innerHTML='<div class="svc"><div class="svc-bar"></div><div class="svc-num">'+s.n+'</div><div class="svc-ico">'+s.i+'</div><div class="svc-title">'+s.t+'</div><div class="svc-desc">'+s.d+'</div><div class="svc-list">'+s.li.map(function(l){return'<div class="svc-li">'+l+'</div>';}).join('')+'</div></div>';
    svgrid.appendChild(c);
  });
  svSec.appendChild(svgrid);root.appendChild(svSec);

  // STATS
  var stSec=div('sec salt sbor');
  var stWrap=div('');stWrap.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:96px;align-items:start;margin-bottom:60px;';
  stWrap.appendChild(buildSH('<span class="sl"><span class="sw">NUMBERS</span></span><span class="sl"><span class="sw red">DON\'T</span> <span class="sw dim">LIE</span></span>','clamp(44px,7vw,96px)'));
  var stIl=div('rv d1 illuminate-section');stIl.style.position='relative';
  var stIlT=div('illuminate-text');stIlT.style.cssText='font-size:12px;color:var(--ink2);line-height:2;letter-spacing:.02em;';
  stIlT.textContent='With a passion for precision and real-world impact, I craft clean code and high-performance systems that deliver measurable results across AI, web, and data engineering domains.';
  stIl.appendChild(stIlT);stWrap.appendChild(stIl);stSec.appendChild(stWrap);
  var stGrid=div('rv d2 stat-grid');
  [{n:5,s:"+",l:"Projects"},{n:2,s:"+",l:"Research Papers"},{n:3,s:"+",l:"Years Engineering"},{n:100,s:"%",l:"Commitment"}].forEach(function(c){
    stGrid.appendChild(div('stat-cell','<div class="stat-big"><span class="counter" data-target="'+c.n+'">0</span><span class="stat-suf">'+c.s+'</span></div><div class="stat-lbl">'+c.l+'</div>'));
  });
  stSec.appendChild(stGrid);root.appendChild(stSec);

  // PROCESS
  var prSec=div('sec sbor');prSec.innerHTML='<div class="eye">(Process)</div>';
  var prSH=buildSH('<span class="sl"><span class="sw">HOW I</span> <span class="sw red">WORK</span></span>','clamp(44px,7vw,96px)');
  prSH.style.marginBottom='50px';prSec.appendChild(prSH);
  var prGrid=div('rv d1 proc-grid');
  [{s:"01",t:"Discovery",d:"Understanding your goals before writing a single line of code."},{s:"02",t:"Architecture",d:"Blueprint: stack, data models, API contracts, full scope."},{s:"03",t:"Build & Refine",d:"Iterative sprints with demos. You're never in the dark."},{s:"04",t:"Launch & Grow",d:"Deploy with confidence. Clean handoff or ongoing support."}].forEach(function(p){
    prGrid.innerHTML+='<div class="proc-card"><div class="proc-step">Step '+p.s+'</div><div class="proc-title">'+p.t+'</div><div class="proc-desc">'+p.d+'</div></div>';
  });
  prSec.appendChild(prGrid);root.appendChild(prSec);

  // PHILOSOPHY
  var philSec=div('sec sbor');philSec.innerHTML='<div class="eye">(Developer Philosophy)</div>';
  var philGrid=div('rv phil-grid');
  var philLeft=div('');
  philLeft.appendChild(buildSH('<span class="sl"><span class="sw">HOW I</span></span><span class="sl"><span class="sw red">THINK</span></span><span class="sl"><span class="sw dim">ABOUT CODE</span></span>','clamp(40px,6vw,72px)'));
  philLeft.appendChild(div('phil-manifesto','<br>I don\'t build <strong>features</strong>.<br>I build systems that keep working<br>when I\'m not in the room.<br><br>Software to me is applied engineering —<br>every decision has a cost,<br>every abstraction has a limit,<br>every system will eventually fail.<br>Design for that.'));
  var philRight=div('');philRight.innerHTML='<div class="phil-pillars">';
  [{ico:'⚙️',t:'Automation First',d:'If I\'m doing something twice, I automate it. Tools that remove human bottlenecks are the highest-leverage things I build.'},
   {ico:'📐',t:'Scalable by Design',d:'Architecture that doesn\'t need to be torn down when the problem grows. Build for the next order of magnitude.'},
   {ico:'🔬',t:'Data-Driven Platforms',d:'Dashboards, ML pipelines, analytics layers — systems that turn raw data into decisions.'},
   {ico:'🛠️',t:'Developer Tools',d:'The best software I build makes other developers faster. I treat internal tooling as first-class products.'}
  ].forEach(function(p){philRight.innerHTML+='<div class="phil-pillar"><span class="phil-ico">'+p.ico+'</span><div><div class="phil-title">'+p.t+'</div><div class="phil-desc">'+p.d+'</div></div></div>';});
  philRight.innerHTML+='</div>';
  philGrid.appendChild(philLeft);philGrid.appendChild(philRight);philSec.appendChild(philGrid);root.appendChild(philSec);

  // FAQ
  var fSec=div('sec salt sbor');
  var fWrap=div('faq-wrap');
  var fSide=div('faq-side');fSide.innerHTML='<div class="eye">(FAQ)</div>';
  fSide.appendChild(buildSH('<span class="sl"><span class="sw">GOT</span></span><span class="sl"><span class="sw red">QUEST</span><span class="sw dim">IONS?</span></span>','clamp(40px,6vw,72px)'));
  fSide.innerHTML+='<p>Can\'t find the answer? <a href="#" onclick="navTo(\'contact\');return false;">Contact me →</a></p>';
  var fRight=div('rv d1');fRight.appendChild(buildFaqs());fWrap.appendChild(fSide);fWrap.appendChild(fRight);fSec.appendChild(fWrap);root.appendChild(fSec);

  // BLOG
  var bSec=div('sec sbor');
  var bh=div('blog-head');
  var bL=div('');bL.innerHTML='<div class="eye">(Latest Insights)</div>';bL.appendChild(buildSH('<span class="sl"><span class="sw">LATEST</span> <span class="sw red">WRITING</span></span>','clamp(40px,6vw,72px)'));
  var bsa=el('a','see-all','ALL ON MEDIUM ↗');bsa.href=MEDIUM_PROFILE;bsa.target='_blank';bsa.rel='noopener noreferrer';
  bh.appendChild(bL);bh.appendChild(bsa);bSec.appendChild(bh);bSec.appendChild(buildBlogCards(BD.slice(0,3)));root.appendChild(bSec);

  // CTA
  var ctaSec=div('cta-sec');
  var ctaSH=buildSH('<span class="sl"><span class="sw">LET\'S BUILD</span></span><span class="sl"><span class="sw red">SOMETHING</span></span><span class="sl"><span class="sw dim">GREAT.</span></span>','clamp(52px,9.5vw,130px)');
  ctaSec.innerHTML='<div class="cta-glow"></div>';
  var ci=div('cta-inner');ci.appendChild(ctaSH);
  ci.innerHTML+='<p style="font-size:11px;color:var(--ink3);margin:22px auto 0;max-width:380px;line-height:1.9;letter-spacing:.04em;">Have a project in mind? I\'d love to hear about it.</p>';
  var cb=div('cta-btns');
  var cb1=el('a','mbtn prim','<span>Get In Touch</span><span class="marr">→</span>');cb1.href='#';cb1.onclick=function(){navTo('contact');return false;};
  var cb2=el('a','mbtn ghost','<span>View My Work</span>');cb2.href='#';cb2.onclick=function(){navTo('works');return false;};
  cb.appendChild(cb1);cb.appendChild(cb2);ci.appendChild(cb);ctaSec.appendChild(ci);root.appendChild(ctaSec);root.appendChild(buildFooter());
  initObservers();
}