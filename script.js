const birthday = new Date("2026-08-20T00:00:00+05:30");

function updateCountdown(){
  const now = new Date();
  let diff = birthday - now;
  if(diff < 0) diff = 0;
  const s = Math.floor(diff/1000);
  document.getElementById("days").textContent = Math.floor(s/86400);
  document.getElementById("hours").textContent = String(Math.floor((s%86400)/3600)).padStart(2,"0");
  document.getElementById("minutes").textContent = String(Math.floor((s%3600)/60)).padStart(2,"0");
  document.getElementById("seconds").textContent = String(s%60).padStart(2,"0");
}
updateCountdown(); setInterval(updateCountdown,1000);

const message = "Today is all about celebrating you. I hope this new year of your life brings you lots of happiness, peaceful moments, exciting adventures and countless reasons to smile. Stay exactly the wonderful person you are, keep believing in yourself, and never forget how special you are to the people around you. Wishing you a truly beautiful birthday, Rani. ❤️";
const typed = document.getElementById("typedMessage");
let i=0;
function typeMessage(){
  if(i < message.length){ typed.textContent += message[i++]; setTimeout(typeMessage,18); }
}
const observer = new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){ typeMessage(); observer.disconnect(); }
},{threshold:.25});
observer.observe(document.querySelector(".message-card"));

document.querySelectorAll(".photo img").forEach(img=>{
  img.parentElement.addEventListener("click",()=>{
    document.getElementById("lightboxImg").src=img.src;
    document.getElementById("lightbox").classList.add("open");
  });
});
document.getElementById("closeLightbox").onclick=()=>document.getElementById("lightbox").classList.remove("open");
document.getElementById("lightbox").addEventListener("click",e=>{
  if(e.target.id==="lightbox") e.currentTarget.classList.remove("open");
});

function confettiBurst(count=130){
  const symbols=["✦","✧","●","◆","♥"];
  for(let n=0;n<count;n++){
    const el=document.createElement("div");
    el.className="confetti";
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=Math.random()*100+"vw";
    el.style.setProperty("--x",(Math.random()*240-120)+"px");
    el.style.animationDuration=(2.8+Math.random()*3)+"s";
    el.style.fontSize=(8+Math.random()*10)+"px";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),6500);
  }
}
document.getElementById("openBtn").onclick=()=>{
  document.querySelector(".message").scrollIntoView({behavior:"smooth"});
  setTimeout(()=>confettiBurst(90),500);
};
document.getElementById("wishBtn").onclick=()=>{
  confettiBurst(180);
  document.getElementById("surpriseModal").classList.add("open");
};
document.getElementById("closeModal").onclick=()=>document.getElementById("surpriseModal").classList.remove("open");

// Small original Web Audio melody, so the site does not need an external music file.
let audioCtx=null, playing=false, timer=null;
const notes=[261.63,329.63,392,523.25,392,329.63,293.66,349.23,440,523.25,440,349.23];
function playMelody(){
  if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)();
  let t=audioCtx.currentTime;
  notes.forEach((freq,k)=>{
    const o=audioCtx.createOscillator(), g=audioCtx.createGain();
    o.type="sine"; o.frequency.value=freq;
    g.gain.setValueAtTime(.0001,t+k*.28);
    g.gain.exponentialRampToValueAtTime(.07,t+k*.28+.03);
    g.gain.exponentialRampToValueAtTime(.0001,t+k*.28+.24);
    o.connect(g); g.connect(audioCtx.destination); o.start(t+k*.28); o.stop(t+k*.28+.25);
  });
}
document.getElementById("musicBtn").onclick=()=>{
  if(!playing){
    playing=true; playMelody();
    timer=setInterval(playMelody,3400);
    document.getElementById("musicBtn").textContent="Ⅱ";
  }else{
    playing=false; clearInterval(timer);
    document.getElementById("musicBtn").textContent="♪";
  }
};
