(function(){
var nav=document.getElementById("nav"),bg=document.getElementById("burger");
if(bg&&nav){bg.onclick=function(){var o=nav.classList.toggle("open");bg.setAttribute("aria-expanded",o)}}
if(window.matchMedia("(prefers-reduced-motion:reduce)").matches)return;
document.querySelectorAll("[data-n]").forEach(function(el){
  var t=+el.dataset.n,s=null;
  function step(ts){s=s||ts;var p=Math.min((ts-s)/1400,1);el.textContent="+"+Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)}
  requestAnimationFrame(step);
});
})();
