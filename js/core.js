/* ===========================
   CORE ENGINE
=========================== */

// Navigation
function go(page){
  window.location = page;
}

// Save name
function saveName(name){
  localStorage.setItem("birthday_user", name);
}

// Get name
function getName(){
  return localStorage.getItem("birthday_user") || "";
}

// Typing Effect
function typeText(id, text, speed = 55){

  const el = document.getElementById(id);
  let i = 0;

  el.innerHTML = "";

  const timer = setInterval(()=>{

    el.innerHTML += text[i];
    i++;

    if(i >= text.length){
      clearInterval(timer);
    }

  }, speed);
}

// Fade In Element
function fadeIn(el, time = 400){

  el.style.opacity = 0;
  el.style.display = "block";

  let val = 0;

  const t = setInterval(()=>{

    val += 0.05;
    el.style.opacity = val;

    if(val >= 1){
      clearInterval(t);
    }

  }, time / 20);
}
