
window.onload = function() {
  Particles.init({
    selector: '.header__background',
    color: '#1295B7',
    speed:.2,
    maxParticles: 100,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 60
        }
      }, {
        breakpoint: 375,
        options: {
          maxParticles: 40
        }
      }
    ]
  });
};