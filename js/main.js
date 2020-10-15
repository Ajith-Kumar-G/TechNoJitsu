
window.onload = function() {
  Particles.init({
    selector: '.header__background',
    color: '#ec5966',
    speed:.1,
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
