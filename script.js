const slides = document.querySelectorAll('.slide');
let current = 0;
let startY = 0;
let endY = 0;
const threshold = 50;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });
}

document.addEventListener('touchstart', e => {
  startY = e.touches[0].clientY;
}, { passive: false });

document.addEventListener('touchmove', e => {
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', e => {
  endY = e.changedTouches[0].clientY;
  handleSwipe();
});

function handleSwipe() {
  const deltaY = startY - endY;

  if (Math.abs(deltaY) < threshold) return;

  if (deltaY > 0 && current < slides.length - 1) {
    current++;
  } else if (deltaY < 0 && current > 0) {
    current--;
  }

  showSlide(current);
}