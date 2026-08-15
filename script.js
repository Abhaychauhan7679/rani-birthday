const birthday = new Date("2026-08-20T00:00:00+05:30");

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  const ids = ["days", "hours", "minutes", "seconds"];

  if (diff <= 0) {
    ids.forEach(id => {
      const e = document.getElementById(id);
      if (e) e.textContent = "0";
    });

    const msg = document.getElementById("countdownMsg");
    if (msg) {
      msg.textContent = "Today is your special day! 🎂💗";
    }
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  [d, h, m, s].forEach((value, i) => {
    const e = document.getElementById(ids[i]);
    if (e) e.textContent = String(value).padStart(2, "0");
  });
}

setInterval(updateCountdown, 1000);
updateCountdown();

const hearts = document.querySelector(".hearts");

function makeHeart() {
  if (!hearts) return;

  const h = document.createElement("div");
  h.className = "heart";

  h.textContent = ["💗", "💕", "💖", "💝", "💓", "🌸"][
    Math.floor(Math.random() * 6)
  ];

  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 24 + "px";
  h.style.animationDuration = 5 + Math.random() * 5 + "s";

  hearts.appendChild(h);

  setTimeout(() => h.remove(), 10000);
}

setInterval(makeHeart, 700);
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu");
  const navLinks = document.querySelector(".navlinks");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});
