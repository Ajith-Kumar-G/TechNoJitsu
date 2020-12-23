
window.onload = function () {
  Particles.init({
    _selector: '.header__background',
    get selector() {
      return this._selector;
    },
    set selector(value) {
      this._selector = value;
    },
    color: '#289F07',
    speed: .125,
    maxParticles: 110,
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
