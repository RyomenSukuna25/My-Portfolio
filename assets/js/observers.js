// ══════════════════════════════════════════════════════════════
// OBSERVERS
// ══════════════════════════════════════════════════════════════
function initObservers(){
  setTimeout(function(){
    var rvO=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('v');rvO.unobserve(e.target);}});},{threshold:.07});
    document.querySelectorAll('.rv').forEach(function(el){rvO.observe(el);});
    var shO=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('v');shO.unobserve(e.target);}});},{threshold:.07});
    document.querySelectorAll('.sh').forEach(function(el){shO.observe(el);});
    var ctO=new IntersectionObserver(function(en){en.forEach(function(e){
      if(e.isIntersecting){var el=e.target,t=+el.dataset.target,t0=performance.now();
        (function s(n){var p=Math.min((n-t0)/1800,1),ease=1-Math.pow(1-p,3);el.textContent=Math.round(ease*t);if(p<1)requestAnimationFrame(s);})(t0);
        ctO.unobserve(el);}
    });},{threshold:.5});
    document.querySelectorAll('.counter').forEach(function(el){ctO.observe(el);});
    var scrO=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){scramble(e.target,e.target.dataset.s||e.target.textContent);scrO.unobserve(e.target);}});},{threshold:.5});
    document.querySelectorAll('.eye').forEach(function(el){el.dataset.s=el.textContent;scrO.observe(el);});
  },80);
  bindHover();initMag();initTilt();
  setTimeout(ilInit,200);
}

// ══════════════════════════════════════════════════════════════
// NAV
// ══════════════════════════════════════════════════════════════
var menuOpen=false;
addEventListener('scroll',function(){document.getElementById('main-nav').classList.toggle('sc',scrollY>50);},{passive:true});
function toggleMenu(){menuOpen=!menuOpen;document.getElementById('mob').classList.toggle('open',menuOpen);var b1=document.getElementById('b1'),b2=document.getElementById('b2'),b3=document.getElementById('b3');b1.style.transform=menuOpen?'rotate(45deg) translate(4px,4px)':'none';b2.style.opacity=menuOpen?0:1;b3.style.transform=menuOpen?'rotate(-45deg) translate(4px,-4px)':'none';}
function closeMob(){if(menuOpen)toggleMenu();}
function setActive(pg){['home','works','about','blog','certs','contact'].forEach(function(p){var e=document.getElementById('nl-'+p);if(e)e.classList.toggle('act',p===pg);});}
function navTo(pg){closeMob();currentPage=pg;scrollTo({top:0});setActive(pg);renderPage(pg);return false;}