/* Aerobox Packers and Movers — scroll reveal + lightbox (tiny, dep-free) */
(function(){
  function lb(s,t,c){
    var d=document.getElementById('lightbox');var i=document.getElementById('lb-img');var cc=document.getElementById('lb-cap');
    i.src=s;cc.textContent=c;d.style.display='flex';document.body.style.overflow='hidden';
  }
  function closeLb(){
    var d=document.getElementById('lightbox');
    if(d){d.style.display='none';}
    document.body.style.overflow='';
  }
  window.closeLb=closeLb;
  window.lb=lb;

  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){closeLb();}
  });

  document.addEventListener('DOMContentLoaded',function(){
    var reveals=document.querySelectorAll('.hero-content,.hero-media,.trust-item,.service-card,.gallery figure,.footer-grid > div');
    if(reveals.length===0)return;
    reveals.forEach(function(el){el.classList.add('reveal');});
    if(!('IntersectionObserver' in window)){
      reveals.forEach(function(el){el.classList.add('is-visible');});return;
    }
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}
      });
    },{threshold:0.10});
    reveals.forEach(function(el){obs.observe(el);});
  });
})();
