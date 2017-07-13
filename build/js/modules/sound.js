'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sound = function () {
  function Sound() {
    _classCallCheck(this, Sound);

    this.soundStatus = true;
    this.soundTheme = true;
    this.sound = document.createElement('audio');
    this.themeSound = document.createElement('audio');
    this.btnSound = document.querySelector('.btn-sound');
  }

  _createClass(Sound, [{
    key: 'play',
    value: function play(keyCode) {
      if (this.soundStatus) {
        switch (keyCode) {
          case 65:
            this.sound.src = 'sounds/hit_sound.wav';
            this.sound.play();
            break;

          case 68:
            this.sound.src = 'sounds/potion_sound.wav';
            this.sound.play();
            break;

          case 87:
            this.sound.src = 'sounds/frozen_sound.wav';
            this.sound.play();
            break;

          case 83:
            this.sound.src = 'sounds/poison_sound.wav';
            this.sound.play();
            break;
        }
      }
    }
  }, {
    key: 'theme',
    value: function theme() {
      var _this = this;

      if (this.soundStatus) {
        this.themeSound.src = 'sounds/pim_poy_pocket.wav';
        this.themeSound.play();

        this.themeSound.addEventListener('ended', function () {
          _this.themeSound.src = 'sounds/pim_poy.wav';
          _this.themeSound.play();
        });
      }
    }
  }, {
    key: 'pauseTheme',
    value: function pauseTheme() {
      this.soundTheme = !this.soundTheme;

      if (this.soundTheme) {
        this.btnSound.classList.remove('off');
        this.themeSound.play();
      } else {
        this.btnSound.classList.add('off');
        this.themeSound.pause();
      }
    }
  }, {
    key: 'status',
    value: function status() {
      this.btnSound.addEventListener('click', this.pauseTheme.bind(this));
      this.theme();
    }
  }, {
    key: 'initSound',
    value: function initSound(evKey) {
      this.play(evKey);
    }
  }]);

  return Sound;
}();

exports.default = Sound;