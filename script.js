/* PERSONALIZATION VIA URL */
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "Someone Special";
const msg = params.get("msg") || "You make my world brighter every single day 💖";

document.getElementById("finalMessage").innerText =
  Dear ${name},\n\n${msg};

/* Typing Effect */
const typingText = "A rose for you… because you deserve something beautiful 🌹";
let index = 0;

function typeEffect() {
  if (index < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 65);
  }
}

/* Start Experience */
function startExperience() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("card").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.play().catch(() => {});

  typeEffect();
}

/* Envelope */
function openLetter() {
  document.getElementById("letter").classList.remove("hidden");
}

/* Share */
function shareLove() {
  if (navigator.share) {
    navigator.share({
      title: "A Rose For You 🌹",
      text: "Someone made this special for you 💖",
      url: window.location.href
    });
  } else {
    alert("Sharing not supported on this device");
  }
}

/* Falling Roses Generator */
const rosesContainer = document.querySelector(".roses");

for (let i = 0; i < 30; i++) {
  const rose = document.createElement("span");
  rose.innerHTML = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.fontSize = 14 + Math.random() * 24 + "px";
  rose.style.animationDuration = 6 + Math.random() * 6 + "s";
  rosesContainer.appendChild(rose);
}