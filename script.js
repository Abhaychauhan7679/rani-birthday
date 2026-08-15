<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Happy Birthday Rani 💗</title>
const birthday = new Date("2026-08-20T00:00:00+05:30");

function updateCountdown(){
  const now = new Date(), diff = birthday - now;
  const ids = ["days","hours","minutes","seconds"];
  if(diff <= 0){
    ids.forEach(id => { const e=document.getElementById(id); if(e)e.textContent="00"; });
    const msg=document.getElementById("countdownMsg");
    if(msg) msg.textContent="Today is your special day! 🎂💗";
    return;
  }
  const d=Math.floor(diff/86400000);
  const h=Math.floor(diff/3600000)%24;
  const m=Math.floor(diff/60000)%60;
  const s=Math.floor(diff/1000)%60;
  [d,h,m,s].forEach((v,i)=>{const e=document.getElementById(ids[i]);if(e)e.textContent=String(v).padStart(2,"0")});
}
setInterval(updateCountdown,1000); updateCountdown();

const hearts = document.querySelector(".hearts");
function makeHeart(){
  if(!hearts)return;
  const h=document.createElement("div");
  h.className="heart";
  h.textContent=["💗","💕","💖","💘","💞","🌸"][Math.floor(Math.random()*6)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(14+Math.random()*24)+"px";
  h.style.animationDuration=(5+Math.random()*5)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),11000);
}
setInterval(makeHeart,420);

const menu=document.querySelector(".menu"), links=document.querySelector(".navlinks");
if(menu)menu.addEventListener("click",()=>links.classList.toggle("open"));

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const musicBtn=document.getElementById("musicBtn");
let audio;
if(musicBtn){
 musicBtn.addEventListener("click",()=>{
   if(!audio){
     audio=new Audio("https://cdn.pixabay.com/download/audio/2022/10/25/audio_1e2f1e9c6d.mp3?filename=romantic-piano-126996.mp3");
     audio.loop=true; audio.volume=.22;
   }
   if(audio.paused){audio.play();musicBtn.textContent="🔊 Music On"}else{audio.pause();musicBtn.textContent="🎵 Music"}
 });
}

const surprise=document.getElementById("surpriseBtn");
if(surprise){
 surprise.addEventListener("click",()=>{
   for(let i=0;i<45;i++) setTimeout(makeHeart,i*45);
   const box=document.getElementById("surpriseText");
   if(box){box.hidden=false;box.classList.add("reveal","show")}
 });
}
