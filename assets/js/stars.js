document.addEventListener('DOMContentLoaded', function() {
  const nightElement = document.getElementById('night');
  const numStars = 100; // Adjust the number of stars as needed

  function positionStars() {
    const shootingStars = document.querySelectorAll('.shooting_star');

    shootingStars.forEach(star => {
      const randomTop = Math.random() * window.innerHeight-5;
      const randomLeft = Math.random() * window.innerWidth-5;

      star.style.top = randomTop + 'px';
      star.style.left = randomLeft + 'px';
    });
  }

  for (let i = 0; i < numStars; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting_star');
    nightElement.appendChild(shootingStar);
  }

  // Initial positioning of stars
  positionStars();

  // Reposition stars on window resize
  window.addEventListener('resize', positionStars);
});
