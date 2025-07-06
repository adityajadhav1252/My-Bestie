// === Typewriter Effect ===
const typewriterText = "To Palak, Whose Silence Speaks Louder Than My Regret";
let typeIndex = 0;

function typeWriter() {
  const el = document.getElementById("typewriter");
  if (typeIndex < typewriterText.length) {
    el.textContent += typewriterText.charAt(typeIndex++);
    setTimeout(typeWriter, 75);
  }
}

// === Memories ===
const memories = [
  "That time we walked in silence but still understood each other.",
  "When your smirk ruined my bad mood instantly.",
  "The Holi ride — unforgettable chaos and color.",
  "How you always stayed. Even when I didn’t ask.",
  "The quiet laughter that said more than words ever could.",
  "That cafe with the yellow lights and shared silence."
];

let debounceTimeout = null;

function showRandom() {
  if (debounceTimeout) return;
  const el = document.getElementById('memoryText');
  const text = memories[Math.floor(Math.random() * memories.length)];

  el.classList.remove('show');
  el.classList.add('fade');
  debounceTimeout = setTimeout(() => {
    el.innerText = text;
    el.classList.add('show');
    debounceTimeout = null;
  }, 300);
}

function showHug() {
  const hug = document.getElementById('hug');
  const message = document.querySelector('.message-box textarea').value.trim();

  if (message !== "") {
    document.getElementById('userMessageDisplay').innerText = `💬 You said: "${message}"`;
  }

  if (hug.classList.contains('hidden')) {
    hug.classList.remove('hidden');
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  }

  // Optional: Clear the input
  document.querySelector('.message-box textarea').value = '';
}

// === Dark Mode Toggle (with Persistence) ===
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// === Background Music Toggle ===
let isPlaying = false;

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  if (!music) return;

  const action = isPlaying ? music.pause() : music.play();
  Promise.resolve(action).then(() => isPlaying = !isPlaying);
}

// === Initialize on Page Load ===
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();

  // Apply saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Initialize AOS if available
  window.AOS?.init?.();
});

function revealSecret() {
  document.getElementById('secret')?.classList.remove('hidden');
  return false; // prevent default link navigation
}