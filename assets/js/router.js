// ══════════════════════════════════════════════════════════════
// ROUTER
// ══════════════════════════════════════════════════════════════
function renderPage(pg){
  ilState.locked=false;ilState.active=null;ilState.buf=0;ilState.exitBuf=0;
  if(pg==='home')renderHome();
  else if(pg==='works')renderWorks();
  else if(pg==='about')renderAbout();
  else if(pg==='blog')renderBlog();
  else if(pg==='certs')renderCerts();
  else if(pg==='contact')renderContact();
  else{
    var root=document.getElementById('page-root');
    root.innerHTML='<div class="p404"><div class="p404n">404</div><div class="p404t">NOT FOUND</div><p class="p404d">The page you\'re looking for doesn\'t exist.</p></div>';
    root.appendChild(buildFooter());
  }
}

renderPage('home');

// ══════════════════════════════════════════════════════════════
// CURSOR THEMES
// ══════════════════════════════════════════════════════════════
var CURSOR_THEMES={
  hero:    {ring:'rgba(255,60,60,.7)',  dot:'#ff3c3c',label:'Explore'},
  work:    {ring:'rgba(57,255,158,.7)', dot:'#39ff9e',label:'Open'},
  about:   {ring:'rgba(60,143,255,.7)',dot:'#3c8fff',label:'Read'},
  svc:     {ring:'rgba(245,200,66,.7)',dot:'#f5c842',label:'View'},
  stat:    {ring:'rgba(255,60,60,.5)', dot:'#ff3c3c',label:''},
  contact: {ring:'rgba(57,255,158,.8)',dot:'#39ff9e',label:'Connect'},
  blog:    {ring:'rgba(60,143,255,.7)',dot:'#3c8fff',label:'Read'},
  certs:   {ring:'rgba(245,200,66,.7)',dot:'#f5c842',label:'Verify'},
  default: {ring:'rgba(255,60,60,.55)',dot:'#e8e4dc',label:''}
};

function applyCursorTheme(theme){
  var t=CURSOR_THEMES[theme]||CURSOR_THEMES.default;
  cring.style.borderColor=t.ring;
  cdot.style.background=t.dot;
  cdot.style.boxShadow='0 0 10px '+t.dot;
  clbl.textContent=t.label;
}

document.addEventListener('mouseover',function(e){
  var target=e.target;
  var sec=target.closest
    ?(target.closest('.hero')?'hero'
    :target.closest('.work-list,.work-row,.gal-card')?'work'
    :target.closest('.svc-grid,.svc')?'svc'
    :target.closest('.stat-grid,.stat-cell')?'stat'
    :target.closest('.origin-grid,.timeline,.skill-list')?'about'
    :target.closest('.blog-grid,.blog-card')?'blog'
    :target.closest('.cert-grid,.cert-card')?'certs'
    :target.closest('.contact-grid,.cta-sec')?'contact'
    :'default')
    :'default';
  applyCursorTheme(sec);
});

// ══════════════════════════════════════════════════════════════
// TERMINAL EASTER EGG — press ` or / to open
// ══════════════════════════════════════════════════════════════
var termOpen=false,termHistory=[],termHistIdx=-1;

var TERM_RESPONSES={
  whoami:['<span style="color:var(--g)">chirag@nagvekar</span> — Full Stack Developer & AI Engineer','Location  : Mumbai, India (GMT+5:30)','Status    : <span style="color:var(--g)">● Open to projects & opportunities</span>','Education : B.E. CS (Data Science) — University of Mumbai','Prev      : Diploma in Mechanical Engineering'],
  'ls':['<span style="color:var(--b)">projects/</span>   <span style="color:var(--b)">skills/</span>   <span style="color:var(--b)">certs/</span>   <span style="color:var(--b)">blog/</span>','<span style="color:var(--r)">resume.pdf</span>  <span style="color:var(--g)">contact.sh</span>  <span style="color:var(--gold)">readme.md</span>'],
  'ls projects':['01  <span style="color:var(--g)">CrowdCure</span>            AI · Research · 2025','02  <span style="color:var(--g)">Maize Disease Detector</span>  ML · Vision · 2024','03  <span style="color:var(--g)">Gym Management System</span>   Full Stack · 2024','04  <span style="color:var(--g)">Team Ethan Racing EV</span>    Engineering · 2023-24'],
  'ls skills':['Languages  : Java  Python  Kotlin  JavaScript  SQL','Web/APIs   : HTML/CSS  REST  Node.js  React','AI / ML    : TensorFlow  Keras  OpenCV  NLP','Cloud / DB : AWS  Azure  MySQL  MongoDB','Tools      : Figma  Git  GitHub  VS Code'],
  'cat readme.md':['<span style="color:var(--gold)"># Chirag Nagvekar</span>','','I started with blueprints. Mechanical engineering gave me','systems thinking — software gave me the tools to act on it.','','Three lines of Python changed my entire trajectory.','','<span style="color:var(--r)">Currently seeking:</span> Internships · Full-time · Contract'],
  'cat resume.txt':['Generating resume...','<span style="color:var(--g)">✓</span> Education    : B.E. CS Data Science (Pursuing)','<span style="color:var(--g)">✓</span> Research     : CrowdCure — Paper-a-thon 2025 (MLSA)','<span style="color:var(--g)">✓</span> Projects     : 4 shipped · 10+ technologies','<span style="color:var(--g)">✓</span> Skills       : Full Stack · AI/ML · Cloud · UI/UX','','<span style="color:var(--b)">→ Download: </span><a href="#" style="color:var(--b)" onclick="return false;">chirag-nagvekar-resume.pdf</a>'],
  github:['Fetching <span style="color:var(--g)">github.com/RyomenSukuna25</span> ...','','★  CrowdCure              Python · AI · NLP','★  MaizeDiseaseDetector   Python · TensorFlow · CV','★  GymManagementSystem    JavaScript · MySQL','','<span style="color:var(--b)">→ Opening GitHub in new tab...</span>'],
  contact:['Initialising contact protocol...','','Email   : <a href="mailto:chiragdnagvekar@email.com" style="color:var(--g)">chiragdnagvekar@email.com</a>','LinkedIn: <a href="https://linkedin.com/in/chirag-nagvekar-b240162b0" target="_blank" style="color:var(--b)">linkedin.com/in/chirag-nagvekar</a>','GitHub  : <a href="https://github.com/RyomenSukuna25" target="_blank" style="color:var(--b)">github.com/RyomenSukuna25</a>','','<span style="color:var(--g)">→ Type "goto contact" to navigate</span>'],
  socials:['<a href="https://github.com/RyomenSukuna25" target="_blank" style="color:var(--b)">GitHub</a>   → github.com/RyomenSukuna25','<a href="https://linkedin.com/in/chirag-nagvekar-b240162b0" target="_blank" style="color:var(--b)">LinkedIn</a> → linkedin.com/in/chirag-nagvekar','<a href="mailto:chiragdnagvekar@email.com" style="color:var(--g)">Email</a>    → chiragdnagvekar@email.com'],
  secret:['<span style="color:var(--gold)">🎮 KONAMI UNLOCKED — SECRET MODE ENGAGED</span>','','Fun facts about Chirag:','  → Started coding to avoid doing lab reports by hand','  → GitHub username is a Jujutsu Kaisen reference 👀','  → Can explain neural nets using car engines','  → Has debugged code at 3am and called it fun','','<span style="color:var(--r)">You found the easter egg. Respect. 🫡</span>'],
  help:['<span style="color:var(--gold)">Available commands:</span>','','  <span style="color:var(--g)">whoami</span>          — Who is Chirag?','  <span style="color:var(--g)">ls</span>              — List files','  <span style="color:var(--g)">ls projects</span>     — List all projects','  <span style="color:var(--g)">ls skills</span>       — List tech stack','  <span style="color:var(--g)">cat readme.md</span>   — Read about me','  <span style="color:var(--g)">cat resume.txt</span>  — View resume summary','  <span style="color:var(--g)">github</span>          — Open GitHub profile','  <span style="color:var(--g)">contact</span>         — Get contact info','  <span style="color:var(--g)">socials</span>         — Social links','  <span style="color:var(--g)">goto [page]</span>     — Navigate (home/works/about/contact)','  <span style="color:var(--g)">secret</span>          — ...','  <span style="color:var(--g)">clear</span>           — Clear terminal','  <span style="color:var(--g)">exit</span>            — Close terminal']
};

function buildTerminal(){
  if(document.getElementById('cn-terminal'))return;
  var overlay=document.createElement('div');
  overlay.id='cn-terminal-overlay';
  overlay.style.cssText='position:fixed;inset:0;z-index:2000;background:rgba(3,3,10,.82);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s;pointer-events:none;';
  var term=document.createElement('div');
  term.id='cn-terminal';
  term.style.cssText='width:min(720px,94vw);max-height:70vh;background:#050510;border:1px solid rgba(255,60,60,.25);box-shadow:0 0 80px rgba(255,60,60,.12),0 40px 120px rgba(0,0,0,.8);display:flex;flex-direction:column;font-family:\'Space Mono\',monospace;overflow:hidden;';
  var bar=document.createElement('div');
  bar.style.cssText='display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(255,60,60,.06);border-bottom:1px solid rgba(255,60,60,.12);flex-shrink:0;';
  bar.innerHTML='<div style="display:flex;gap:7px"><span style="width:11px;height:11px;border-radius:50%;background:#ff5f56;display:inline-block;"></span><span style="width:11px;height:11px;border-radius:50%;background:#ffbd2e;display:inline-block;"></span><span style="width:11px;height:11px;border-radius:50%;background:#27c93f;display:inline-block;"></span></div><span style="font-size:9px;letter-spacing:.16em;color:rgba(232,228,220,.25);">CHIRAG.DEV — TERMINAL v1.0</span><button onclick="closeTerm()" style="background:none;border:none;color:rgba(232,228,220,.3);font-size:14px;cursor:pointer;font-family:inherit;padding:0 4px;">✕</button>';
  var output=document.createElement('div');
  output.id='term-output';
  output.style.cssText='flex:1;overflow-y:auto;padding:18px 20px;font-size:11px;line-height:1.9;color:rgba(232,228,220,.75);letter-spacing:.03em;';
  output.innerHTML='<div style="color:var(--g);margin-bottom:4px;">Welcome to chirag@nagvekar terminal — v1.0.0</div><div style="color:rgba(232,228,220,.3);margin-bottom:16px;">Type <span style="color:var(--gold)">help</span> for commands. Press <span style="color:var(--gold)">`</span> or <span style="color:var(--gold)">Esc</span> to close.</div>';
  var inputRow=document.createElement('div');
  inputRow.style.cssText='display:flex;align-items:center;padding:10px 20px 14px;border-top:1px solid rgba(255,60,60,.08);flex-shrink:0;gap:8px;';
  inputRow.innerHTML='<span style="color:var(--g);font-size:10px;white-space:nowrap;">chirag@dev:~$</span>';
  var inp=document.createElement('input');
  inp.id='term-input';inp.type='text';inp.autocomplete='off';inp.spellcheck=false;
  inp.style.cssText='flex:1;background:none;border:none;outline:none;color:rgba(232,228,220,.9);font-family:\'Space Mono\',monospace;font-size:11px;letter-spacing:.04em;caret-color:var(--r);';
  inp.placeholder='type a command...';
  inputRow.appendChild(inp);
  term.appendChild(bar);term.appendChild(output);term.appendChild(inputRow);
  overlay.appendChild(term);document.body.appendChild(overlay);
  inp.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
      var cmd=inp.value.trim().toLowerCase();if(!cmd)return;
      termHistory.unshift(cmd);termHistIdx=-1;
      termPrint('<span style="color:rgba(57,255,158,.5)">chirag@dev:~$</span> '+cmd);
      termExec(cmd);inp.value='';
      setTimeout(function(){output.scrollTop=output.scrollHeight;},80);
    }
    if(e.key==='ArrowUp'){termHistIdx=Math.min(termHistIdx+1,termHistory.length-1);inp.value=termHistory[termHistIdx]||'';e.preventDefault();}
    if(e.key==='ArrowDown'){termHistIdx=Math.max(termHistIdx-1,-1);inp.value=termHistIdx>=0?termHistory[termHistIdx]:'';e.preventDefault();}
    if(e.key==='Escape'||e.key==='`')closeTerm();
    e.stopPropagation();
  });
  overlay.addEventListener('wheel',function(e){e.stopPropagation();},{passive:false});
}

function termPrint(html){
  var output=document.getElementById('term-output');if(!output)return;
  var line=document.createElement('div');line.innerHTML=html;output.appendChild(line);
}

function termPrintLines(lines,delay){
  delay=delay||0;
  lines.forEach(function(l,i){setTimeout(function(){termPrint(l);var o=document.getElementById('term-output');if(o)o.scrollTop=o.scrollHeight;},delay+i*55);});
}

function termExec(cmd){
  if(cmd==='exit'){setTimeout(closeTerm,200);return;}
  if(cmd==='clear'){var o=document.getElementById('term-output');if(o)o.innerHTML='';return;}
  if(cmd==='skills')cmd='ls skills';
  if(cmd==='projects')cmd='ls projects';
  if(cmd.startsWith('goto ')){
    var pg=cmd.replace('goto ','').trim();
    termPrint('<span style="color:var(--g)">→ Navigating to '+pg+'...</span>');
    setTimeout(function(){closeTerm();navTo(pg);},600);return;
  }
  if(cmd==='github'){termPrintLines(TERM_RESPONSES.github,0);setTimeout(function(){window.open('https://github.com/RyomenSukuna25','_blank');},900);return;}
  var resp=TERM_RESPONSES[cmd];
  if(resp)termPrintLines(resp,0);
  else termPrint('<span style="color:var(--r)">command not found: '+cmd+'</span>  — type <span style="color:var(--gold)">help</span>');
}

function openTerm(){
  buildTerminal();
  var o=document.getElementById('cn-terminal-overlay');if(!o)return;
  termOpen=true;o.style.pointerEvents='auto';
  requestAnimationFrame(function(){o.style.opacity='1';});
  setTimeout(function(){var i=document.getElementById('term-input');if(i)i.focus();},200);
}

function closeTerm(){
  var o=document.getElementById('cn-terminal-overlay');if(!o)return;
  termOpen=false;o.style.opacity='0';o.style.pointerEvents='none';
}

document.addEventListener('keydown',function(e){
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
  if(e.key==='`'||e.key==='/'){e.preventDefault();if(termOpen)closeTerm();else openTerm();}
  if(e.key==='Escape'&&termOpen)closeTerm();
});

// Konami code
(function(){
  var seq=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'],idx=0;
  document.addEventListener('keydown',function(e){
    if(e.key===seq[idx]){idx++;if(idx===seq.length){idx=0;openTerm();setTimeout(function(){termPrint('<span style="color:rgba(57,255,158,.5)">chirag@dev:~$</span> secret');termExec('secret');},500);}}else{idx=0;}
  });
})();

// ══════════════════════════════════════════════════════════════
// PARTICLE BURST ON CLICK
// ══════════════════════════════════════════════════════════════
document.addEventListener('click',function(e){
  for(var i=0;i<8;i++){
    var p=document.createElement('span');
    var colors=['var(--r)','var(--b)','var(--g)','var(--gold)'];
    p.style.cssText='position:fixed;z-index:9990;width:4px;height:4px;border-radius:50%;background:'+colors[Math.floor(Math.random()*colors.length)]+';pointer-events:none;left:'+e.clientX+'px;top:'+e.clientY+'px;';
    document.body.appendChild(p);
    var angle=(Math.PI*2*i)/8,dist=28+Math.random()*36;
    var tx=Math.cos(angle)*dist,ty=Math.sin(angle)*dist;
    p.animate([{transform:'translate(-50%,-50%) scale(1)',opacity:1},{transform:'translate(calc(-50% + '+tx+'px), calc(-50% + '+ty+'px)) scale(0)',opacity:0}],{duration:500+Math.random()*200,easing:'cubic-bezier(.16,1,.3,1)',fill:'forwards'});
    setTimeout(function(){p.remove();},800);
  }
});