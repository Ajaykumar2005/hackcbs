
document.addEventListener('DOMContentLoaded', function() {
    const nightElement = document.getElementById('night');
    const numStars = 170;

    for (let i = 0; i < numStars; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting_star');
      nightElement.appendChild(shootingStar);
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
const shootingStars = document.querySelectorAll('.shooting_star');

shootingStars.forEach((star, index) => {
const randomTop = Math.random() * window.innerHeight;
const randomLeft = Math.random() * window.innerWidth;

star.style.top = randomTop + 'px';
star.style.left = randomLeft + 'px';
star.style.animationDelay = index * 1000 + 'ms';
});

// Rest of your JavaScript code...
});