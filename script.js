
const CA_LIVE = true;
const CA_ADDRESS = "Coming Soon";

const PUMPFUN_URL = `https://pump.fun/coin/${CA_ADDRESS}`;
const DEXSCREENER_URL = `https://dexscreener.com/solana/${CA_ADDRESS}`;

function buyNow() {
  window.location.href = PUMPFUN_URL;
}

function initCA() {
  const badge = document.getElementById('liveBadge');
  const caText = document.getElementById('caText');
  const pumpLink = document.getElementById('pumpfunLink');
  const dexLink = document.getElementById('dexscreenerLink');

  if (pumpLink) pumpLink.href = PUMPFUN_URL;
  if (dexLink) dexLink.href = DEXSCREENER_URL;

  if (CA_LIVE) {
    badge.style.display = 'inline-flex';
    caText.textContent = CA_ADDRESS;
  } else {
    badge.style.display = 'none';
    caText.textContent = 'CA: Coming Soon';
  }
}
initCA();

function copyCA() {
  const btn = document.getElementById('caBtn');
  const caText = document.getElementById('caText');
  const textToCopy = CA_LIVE ? CA_ADDRESS : caText.textContent.replace(/^CA:\s*/, '');

  navigator.clipboard.writeText(textToCopy).then(() => {
    btn.classList.add('copied');
    setTimeout(() => {
      btn.classList.remove('copied');
    }, 1500);
  });
}

document.querySelector('.menu-toggle').addEventListener('click', () => {
  const nav = document.getElementById('navLinks');
  const navBar = document.querySelector('nav');
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  const navRect = navBar.getBoundingClientRect();
  nav.style.position = 'absolute';
  nav.style.top = navRect.height + 'px';
  nav.style.right = '14px';
  nav.style.left = '14px';
  nav.style.background = 'rgba(0,0,0,0.97)'; nav.style.border = '1px solid #f97316';
  nav.style.flexDirection = 'column'; nav.style.padding = '18px 20px'; nav.style.borderRadius = '16px';
  nav.style.gap = '16px';
});


const slogans = [
  "NO UTILITY. JUST UNLIMITED MEOWS. 🐾",
  "BORN TO MEOW. BUILT TO MOON. 🚀",
  "100% FLUFF. 0% BRAINCELLS. ☁️",
  "EVERY PUMP DESERVES A POMPOM. 🐱",
  "TOUCH GRASS? WE'D RATHER CHASE YARN. 🧶",
  "POWERED BY CATNIP & COMMUNITY. ✨"
];
const track = document.getElementById('marqueeTrack');
const full = [...slogans, ...slogans];
track.innerHTML = full.map(s => `<span>${s}</span>`).join('<span>•</span>');


const bgIcons = ['🐾', '🪙', '⭐', '🧶', '🐟', '✨'];
const bgDrift = document.getElementById('bgDrift');
for (let i = 0; i < 16; i++) {
  const el = document.createElement('span');
  el.textContent = bgIcons[Math.floor(Math.random() * bgIcons.length)];
  el.style.left = Math.random() * 100 + '%';
  el.style.top = Math.random() * 100 + '%';
  el.style.fontSize = (16 + Math.random() * 20) + 'px';
  el.style.animationDelay = (Math.random() * 5) + 's';
  el.style.animationDuration = (7 + Math.random() * 6) + 's';
  bgDrift.appendChild(el);
}
