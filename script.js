const box = document.querySelector('.box');
let boxX, boxY;
let canMove = true;

// Random initial position
window.addEventListener('load', () => {
  boxX = Math.random() * (window.innerWidth - 200);
  boxY = Math.random() * (window.innerHeight - 200);
  box.style.left = `${boxX}px`;
  box.style.top = `${boxY}px`;
});

// Move box when cursor comes near
document.addEventListener('mousemove', (e) => {
  if (!canMove) return;

  const boxRect = box.getBoundingClientRect();
  const centerX = boxRect.left + boxRect.width / 2;
  const centerY = boxRect.top + boxRect.height / 2;

  const distanceX = e.clientX - centerX;
  const distanceY = e.clientY - centerY;
  const distance = Math.hypot(distanceX, distanceY);

  if (distance < 200) {
    canMove = false;

    // New random position
    boxX = Math.random() * (window.innerWidth - boxRect.width);
    boxY = Math.random() * (window.innerHeight - boxRect.height);

    box.style.left = `${boxX}px`;
    box.style.top = `${boxY}px`;

    // Animation
    box.style.transform = "scale(1.2)";
    setTimeout(() => {
      box.style.transform = "scale(1)";
    }, 200);

    // Cooldown to prevent jitter
    setTimeout(() => {
      canMove = true;
    }, 300);
  }
});

// Quit button scroll
const quitBtn = document.getElementById('quitBtn');

quitBtn.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});
