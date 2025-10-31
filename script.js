const box = document.querySelector('.box');

document.addEventListener('mousemove', (e) => {
  const boxRect = box.getBoundingClientRect();
  const distanceX = Math.abs(e.clientX - (boxRect.left + boxRect.width / 2));
  const distanceY = Math.abs(e.clientY - (boxRect.top + boxRect.height / 2));

  // When cursor gets close to the box, move it randomly
  if (distanceX < 100 && distanceY < 100) {
    const newX = Math.random() * (window.innerWidth - boxRect.width);
    const newY = Math.random() * (window.innerHeight - boxRect.height);

    box.style.left = `${newX}px`;
    box.style.top = `${newY}px`;

    // Fun scale effect
    box.style.transform = 'scale(1.1)';
    setTimeout(() => {
      box.style.transform = 'scale(1)';
    }, 200);
  }
});
