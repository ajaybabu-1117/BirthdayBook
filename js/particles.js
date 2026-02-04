/* ===========================
   PARTICLE SYSTEM
=========================== */

const symbols = ["✨","❤️","💖","💫","🌟","🎈"];

const container = document.createElement("div");
container.id = "particles";

document.body.appendChild(container);

function createParticle(){

  const p = document.createElement("div");

  p.innerHTML =
    symbols[Math.floor(Math.random()*symbols.length)];

  p.style.position = "absolute";

  p.style.left = Math.random()*100 + "vw";
  p.style.bottom = "-30px";

  p.style.fontSize = 12 + Math.random()*22 + "px";

  p.style.opacity = .8;

  const duration = 6 + Math.random()*7;

  p.style.animation = `rise ${duration}s linear`;

  container.appendChild(p);

  setTimeout(()=>p.remove(), duration*1000);
}

/* Animation */
const style = document.createElement("style");

style.innerHTML = `
@keyframes rise{
  from{
    transform:translateY(0) scale(.6);
    opacity:0;
  }
  to{
    transform:translateY(-120vh) scale(1.3);
    opacity:1;
  }
}
`;

document.head.appendChild(style);

/* Spawn Loop */
setInterval(createParticle, 350);
