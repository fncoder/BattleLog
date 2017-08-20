(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(name) {
    _classCallCheck(this, Character);

    this.name = name;
    this.health = 100;
    this.damage = 0;
    this.maxDamage = 0;
    this.criticalChance = 16;
    this.potionHealth = true;
    this.criticDamage = 0;
    this.frozen = true;
    this.statusSkill = false;
    this.poisonDamage = 0;
    this.poison = true;
    this.timePoisoning = 0;
    this.poisonChance = 16;
  }

  _createClass(Character, [{
    key: "simpleAttack",
    value: function simpleAttack() {
      this.damage = Math.floor(Math.random() * 24);
      if (Math.floor(Math.random() * 100) <= this.criticalChance) {
        this.damage += this.damage + 100 / 100 * this.damage;
        this.criticDamage = this.damage;
        this.health -= this.damage;
        this.maxDamage += this.damage;
      } else {
        this.health -= this.damage;
        this.maxDamage += this.damage;
        this.criticDamage = 0;
      }
    }
  }, {
    key: "poisonAttack",
    value: function poisonAttack() {
      this.damage = Math.floor(Math.random() * 10);
      if (Math.floor(Math.random() * 100) <= this.poisonChance && this.poison) {
        this.timePoisoning = 3;
        this.poisonDamage = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        this.health -= this.damage;
        this.maxDamage += this.damage;
        this.poison = false;
      } else {
        this.health -= this.damage;
        this.maxDamage += this.damage;
        this.timePoisoning -= 1;
        if (this.timePoisoning === 0) {
          this.timePoisoning = 0;
          this.poisonDamage = 0;
          this.poison = true;
        }
      }
    }
  }, {
    key: "usePotionHealth",
    value: function usePotionHealth() {
      if (this.potionHealth) {
        this.health += 50;
        this.potionHealth = false;
      }
    }
  }, {
    key: "useFrozen",
    value: function useFrozen() {
      this.frozen = false;
    }
  }]);

  return Character;
}();

exports.default = Character;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJuYW1lIiwiaGVhbHRoIiwiZGFtYWdlIiwibWF4RGFtYWdlIiwiY3JpdGljYWxDaGFuY2UiLCJwb3Rpb25IZWFsdGgiLCJjcml0aWNEYW1hZ2UiLCJmcm96ZW4iLCJzdGF0dXNTa2lsbCIsInBvaXNvbkRhbWFnZSIsInBvaXNvbiIsInRpbWVQb2lzb25pbmciLCJwb2lzb25DaGFuY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBLFM7QUFDbkIscUJBQWFDLElBQWIsRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNEOzs7O21DQUVlO0FBQ2QsV0FBS1YsTUFBTCxHQUFjVyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBZDtBQUNBLFVBQUlGLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixHQUEzQixLQUFtQyxLQUFLWCxjQUE1QyxFQUE0RDtBQUMxRCxhQUFLRixNQUFMLElBQWUsS0FBS0EsTUFBTCxHQUFjLE1BQU0sR0FBTixHQUFZLEtBQUtBLE1BQTlDO0FBQ0EsYUFBS0ksWUFBTCxHQUFvQixLQUFLSixNQUF6QjtBQUNBLGFBQUtELE1BQUwsSUFBZSxLQUFLQyxNQUFwQjtBQUNBLGFBQUtDLFNBQUwsSUFBa0IsS0FBS0QsTUFBdkI7QUFDRCxPQUxELE1BS087QUFDTCxhQUFLRCxNQUFMLElBQWUsS0FBS0MsTUFBcEI7QUFDQSxhQUFLQyxTQUFMLElBQWtCLEtBQUtELE1BQXZCO0FBQ0EsYUFBS0ksWUFBTCxHQUFvQixDQUFwQjtBQUNEO0FBQ0Y7OzttQ0FFZTtBQUNkLFdBQUtKLE1BQUwsR0FBY1csS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLEVBQTNCLENBQWQ7QUFDQSxVQUFJRixLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0IsR0FBM0IsS0FBbUMsS0FBS0gsWUFBeEMsSUFBd0QsS0FBS0YsTUFBakUsRUFBeUU7QUFDdkUsYUFBS0MsYUFBTCxHQUFxQixDQUFyQjtBQUNBLGFBQUtGLFlBQUwsR0FBb0JJLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxNQUFpQixLQUFLLEVBQUwsR0FBVSxDQUEzQixDQUFYLElBQTRDLEVBQWhFO0FBQ0EsYUFBS2QsTUFBTCxJQUFlLEtBQUtDLE1BQXBCO0FBQ0EsYUFBS0MsU0FBTCxJQUFrQixLQUFLRCxNQUF2QjtBQUNBLGFBQUtRLE1BQUwsR0FBYyxLQUFkO0FBQ0QsT0FORCxNQU1PO0FBQ0wsYUFBS1QsTUFBTCxJQUFlLEtBQUtDLE1BQXBCO0FBQ0EsYUFBS0MsU0FBTCxJQUFrQixLQUFLRCxNQUF2QjtBQUNBLGFBQUtTLGFBQUwsSUFBc0IsQ0FBdEI7QUFDQSxZQUFJLEtBQUtBLGFBQUwsS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsZUFBS0EsYUFBTCxHQUFxQixDQUFyQjtBQUNBLGVBQUtGLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxlQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNEO0FBQ0Y7QUFDRjs7O3NDQUVrQjtBQUNqQixVQUFJLEtBQUtMLFlBQVQsRUFBdUI7QUFDckIsYUFBS0osTUFBTCxJQUFlLEVBQWY7QUFDQSxhQUFLSSxZQUFMLEdBQW9CLEtBQXBCO0FBQ0Q7QUFDRjs7O2dDQUVZO0FBQ1gsV0FBS0UsTUFBTCxHQUFjLEtBQWQ7QUFDRDs7Ozs7O2tCQTVEa0JSLFMiLCJmaWxlIjoiY2hhcmFjdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIHtcclxuICBjb25zdHJ1Y3RvciAobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgdGhpcy5oZWFsdGggPSAxMDBcclxuICAgIHRoaXMuZGFtYWdlID0gMFxyXG4gICAgdGhpcy5tYXhEYW1hZ2UgPSAwXHJcbiAgICB0aGlzLmNyaXRpY2FsQ2hhbmNlID0gMTZcclxuICAgIHRoaXMucG90aW9uSGVhbHRoID0gdHJ1ZVxyXG4gICAgdGhpcy5jcml0aWNEYW1hZ2UgPSAwXHJcbiAgICB0aGlzLmZyb3plbiA9IHRydWVcclxuICAgIHRoaXMuc3RhdHVzU2tpbGwgPSBmYWxzZVxyXG4gICAgdGhpcy5wb2lzb25EYW1hZ2UgPSAwXHJcbiAgICB0aGlzLnBvaXNvbiA9IHRydWVcclxuICAgIHRoaXMudGltZVBvaXNvbmluZyA9IDBcclxuICAgIHRoaXMucG9pc29uQ2hhbmNlID0gMTZcclxuICB9XHJcblxyXG4gIHNpbXBsZUF0dGFjayAoKSB7XHJcbiAgICB0aGlzLmRhbWFnZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI0KVxyXG4gICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgPD0gdGhpcy5jcml0aWNhbENoYW5jZSkge1xyXG4gICAgICB0aGlzLmRhbWFnZSArPSB0aGlzLmRhbWFnZSArIDEwMCAvIDEwMCAqIHRoaXMuZGFtYWdlXHJcbiAgICAgIHRoaXMuY3JpdGljRGFtYWdlID0gdGhpcy5kYW1hZ2VcclxuICAgICAgdGhpcy5oZWFsdGggLT0gdGhpcy5kYW1hZ2VcclxuICAgICAgdGhpcy5tYXhEYW1hZ2UgKz0gdGhpcy5kYW1hZ2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGVhbHRoIC09IHRoaXMuZGFtYWdlXHJcbiAgICAgIHRoaXMubWF4RGFtYWdlICs9IHRoaXMuZGFtYWdlXHJcbiAgICAgIHRoaXMuY3JpdGljRGFtYWdlID0gMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9pc29uQXR0YWNrICgpIHtcclxuICAgIHRoaXMuZGFtYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICBpZiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSA8PSB0aGlzLnBvaXNvbkNoYW5jZSAmJiB0aGlzLnBvaXNvbikge1xyXG4gICAgICB0aGlzLnRpbWVQb2lzb25pbmcgPSAzXHJcbiAgICAgIHRoaXMucG9pc29uRGFtYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDMwIC0gMTAgKyAxKSkgKyAxMFxyXG4gICAgICB0aGlzLmhlYWx0aCAtPSB0aGlzLmRhbWFnZVxyXG4gICAgICB0aGlzLm1heERhbWFnZSArPSB0aGlzLmRhbWFnZVxyXG4gICAgICB0aGlzLnBvaXNvbiA9IGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhlYWx0aCAtPSB0aGlzLmRhbWFnZVxyXG4gICAgICB0aGlzLm1heERhbWFnZSArPSB0aGlzLmRhbWFnZVxyXG4gICAgICB0aGlzLnRpbWVQb2lzb25pbmcgLT0gMVxyXG4gICAgICBpZiAodGhpcy50aW1lUG9pc29uaW5nID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy50aW1lUG9pc29uaW5nID0gMFxyXG4gICAgICAgIHRoaXMucG9pc29uRGFtYWdlID0gMFxyXG4gICAgICAgIHRoaXMucG9pc29uID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VQb3Rpb25IZWFsdGggKCkge1xyXG4gICAgaWYgKHRoaXMucG90aW9uSGVhbHRoKSB7XHJcbiAgICAgIHRoaXMuaGVhbHRoICs9IDUwXHJcbiAgICAgIHRoaXMucG90aW9uSGVhbHRoID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUZyb3plbiAoKSB7XHJcbiAgICB0aGlzLmZyb3plbiA9IGZhbHNlXHJcbiAgfVxyXG59XHJcbiJdfQ==
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.player2 = exports.player1 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _character = require('./character.js');

var _character2 = _interopRequireDefault(_character);

var _sound = require('./sound.js');

var _sound2 = _interopRequireDefault(_sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var player1 = exports.player1 = new _character2.default('You');
var player2 = exports.player2 = new _character2.default('Opponent');

var Dashboard = function (_Sound) {
  _inherits(Dashboard, _Sound);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));

    _this.components = {
      keysItem: {
        w: 87,
        a: 65,
        s: 83,
        d: 68
      },

      playerName: document.querySelector('.player-name'),
      health: document.querySelector('.health'),
      wrapLog: document.querySelector('.logs'),
      elLogs: document.querySelectorAll('.logs p'),
      elKeys: document.querySelectorAll('.key'),
      messages: document.querySelector('.messages'),
      animateLog: document.querySelector('.log-animate'),
      numbersLogs: document.querySelector('.numbers-logs')

    };
    _this.gameStatus = false;
    _this.logs = [];
    _this.currentLog = 0;
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'attackProcess',
    value: function attackProcess(player1, player2, playerSkill) {
      if (player1.health > 0 && player2.health > 0) {
        playerSkill();

        player2.health -= player1.damage;
        player1.health += player1.damage;

        if (player1.timePoisoning > 0) {
          player2.health -= player1.poisonDamage;
        } else {
          player1.poisonDamage = 0;
          player1.poison = true;
        }

        this.damageInfo(player1);

        if (player2.health <= 0) {
          this.logInfo(player2, 'died');
        }
      }
    }
  }, {
    key: 'round',
    value: function round(e) {
      var _this2 = this;

      var keyCode = e.keyCode;

      if (keyCode === 65 && !player1.statusSkill) {
        if (player1.health > 0) {
          player1.statusSkill = true;
          if (player1.timePoisoning > 0) {
            player1.timePoisoning -= 1;
          }
          this.attackProcess(player1, player2, player1.simpleAttack.bind(player1));
          this.opponentSet(keyCode);
          this.initSound(keyCode);
        }
      } else if (keyCode === 68 && !player1.statusSkill) {
        if (player1.health > 0 && player1.potionHealth) {
          player1.statusSkill = true;
          player1.usePotionHealth();
          this.logInfo(player1, 'use potion health');
          this.opponentSet(keyCode);
          this.initSound(keyCode);
        }
      } else if (keyCode === 87 && !player1.statusSkill) {
        if (player1.health > 0 && player1.frozen) {
          player1.useFrozen();
          this.logInfo(player1, 'your opponent is frozen');
          this.initSound(keyCode);
        }
      } else if (keyCode === 83 && !player1.statusSkill) {
        if (player1.health > 0) {
          player1.statusSkill = true;
          this.attackProcess(player1, player2, player1.poisonAttack.bind(player1));
          this.opponentSet();
          this.initSound(keyCode);
        }
      }

      var _loop = function _loop(i) {
        if (keyCode === parseInt(_this2.components.elKeys[i].getAttribute('data-key'))) {
          _this2.components.elKeys[i].classList.add('key-active');
          setTimeout(function () {
            _this2.components.elKeys[i].classList.remove('key-active');
          }, 300);
        }
      };

      for (var i = 0; i < this.components.elKeys.length; i++) {
        _loop(i);
      }

      this.updateHealth();
    }
  }, {
    key: 'opponentSet',
    value: function opponentSet(evKey) {
      var _this3 = this;

      var timeRound = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;

      if (player2.health > 0) {
        setTimeout(function () {
          if (player2.potionHealth && Math.floor(Math.random() * 100) <= 25 && player2.health <= 50) {
            player2.usePotionHealth();
            _this3.logInfo(player2, 'use potion health');
            _this3.initSound(_this3.components.keysItem.d);
            player1.statusSkill = false;
          } else if (player2.frozen && Math.floor(Math.random() * 100) <= 25 && player2.health <= 75) {
            player2.useFrozen();
            _this3.initSound(_this3.components.keysItem.w);
            _this3.logInfo(player2, 'your opponent is frozen');
            setTimeout(function () {
              if (Math.floor(Math.random() * 100) <= 35 && player2.poison) {
                _this3.attackProcess(player2, player1, player2.poisonAttack.bind(player2));
                _this3.initSound(_this3.components.keysItem.s);
              } else {
                player2.timePoisoning -= 1;
                _this3.attackProcess(player2, player1, player2.simpleAttack.bind(player2));
                _this3.initSound(_this3.components.keysItem.a);
              }
              _this3.updateHealth();
              player1.statusSkill = false;
            }, timeRound);
          } else {
            if (Math.floor(Math.random() * 100) <= player2.poisonChance && player2.poison) {
              _this3.attackProcess(player2, player1, player2.poisonAttack.bind(player2));
              _this3.initSound(_this3.components.keysItem.s);
            } else {
              player2.timePoisoning -= 1;
              _this3.attackProcess(player2, player1, player2.simpleAttack.bind(player2));
              _this3.initSound(_this3.components.keysItem.a);
            }
            _this3.updateHealth();
            player1.statusSkill = false;
          }
        }, timeRound);
      }
    }
  }, {
    key: 'createLog',
    value: function createLog() {
      var _this4 = this;

      this.singleLog = document.createElement('p');

      this.singleLog.classList.add('log_' + this.currentLog);

      this.logs.forEach(function (value, index) {
        _this4.singleLog.innerHTML = value;
      });

      this.currentLog++;

      this.components.wrapLog.appendChild(this.singleLog);

      this.components.wrapLog.scrollTop = this.components.wrapLog.scrollHeight;
    }
  }, {
    key: 'animateLog',
    value: function animateLog(currentPlayer) {
      var _this5 = this;

      var lastElement = this.logs[this.logs.length - 1];
      var lengthName = currentPlayer.name.length + 2;

      var elementLog = lastElement.slice(lengthName, lastElement.length);

      this.components.animateLog.innerHTML = elementLog;
      this.components.animateLog.classList.add('active');

      setTimeout(function () {
        _this5.components.animateLog.classList.remove('active');
      }, 2000);
    }
  }, {
    key: 'damageInfo',
    value: function damageInfo(currentPlayer) {
      if (currentPlayer.criticDamage > 0 && currentPlayer.poisonDamage === 0) {
        this.logs.push(currentPlayer.name + ': ' + 'critical damage ' + currentPlayer.damage);
        this.animateLog(currentPlayer);
      } else if (currentPlayer.damage === 0 && currentPlayer.poison) {
        this.logs.push(currentPlayer.name + ': ' + 'missed');
        this.animateLog(currentPlayer);
      } else if (currentPlayer.poisonDamage > 0 && currentPlayer.damage === 0) {
        this.logs.push(currentPlayer.name + ': ' + 'missed' + ' and damage ' + currentPlayer.poisonDamage + ' from poisoning');
      } else {
        if (currentPlayer.poisonDamage > 0 && currentPlayer.criticDamage > 0) {
          this.logs.push(currentPlayer.name + ': ' + 'critical damage ' + currentPlayer.damage + ' and damage ' + currentPlayer.poisonDamage + ' from poisoning');
        } else if (currentPlayer.poisonDamage > 0) {
          this.logs.push(currentPlayer.name + ': ' + 'damage ' + currentPlayer.damage + ' and damage ' + currentPlayer.poisonDamage + ' from poisoning');
        } else {
          this.logs.push(currentPlayer.name + ': ' + 'damage ' + currentPlayer.damage);
        }
      }
      this.createLog();
      this.updateLogs();
    }
  }, {
    key: 'logInfo',
    value: function logInfo(currentPlayer, infoSkill) {
      this.logs.push(currentPlayer.name + ': ' + infoSkill);
      this.createLog();
      this.animateLog(currentPlayer);
      this.updateLogs();
    }
  }, {
    key: 'updateHealth',
    value: function updateHealth() {
      this.components.health.innerHTML = player1.health;
      this.components.playerName.innerHTML = player1.name;
    }
  }, {
    key: 'updateLogs',
    value: function updateLogs() {
      this.components.numbersLogs.innerHTML = this.currentLog + '/' + this.currentLog;
    }
  }, {
    key: 'init',
    value: function init() {
      if (!this.gameStatus) {
        document.addEventListener('keydown', this.round.bind(this), false);
      }
      this.status();
      this.updateHealth();
      this.updateLogs();
    }
  }]);

  return Dashboard;
}(_sound2.default);

exports.default = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJwbGF5ZXIxIiwicGxheWVyMiIsIkRhc2hib2FyZCIsImNvbXBvbmVudHMiLCJrZXlzSXRlbSIsInciLCJhIiwicyIsImQiLCJwbGF5ZXJOYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhbHRoIiwid3JhcExvZyIsImVsTG9ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbEtleXMiLCJtZXNzYWdlcyIsImFuaW1hdGVMb2ciLCJudW1iZXJzTG9ncyIsImdhbWVTdGF0dXMiLCJsb2dzIiwiY3VycmVudExvZyIsInBsYXllclNraWxsIiwiZGFtYWdlIiwidGltZVBvaXNvbmluZyIsInBvaXNvbkRhbWFnZSIsInBvaXNvbiIsImRhbWFnZUluZm8iLCJsb2dJbmZvIiwiZSIsImtleUNvZGUiLCJzdGF0dXNTa2lsbCIsImF0dGFja1Byb2Nlc3MiLCJzaW1wbGVBdHRhY2siLCJiaW5kIiwib3Bwb25lbnRTZXQiLCJpbml0U291bmQiLCJwb3Rpb25IZWFsdGgiLCJ1c2VQb3Rpb25IZWFsdGgiLCJmcm96ZW4iLCJ1c2VGcm96ZW4iLCJwb2lzb25BdHRhY2siLCJpIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwibGVuZ3RoIiwidXBkYXRlSGVhbHRoIiwiZXZLZXkiLCJ0aW1lUm91bmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwb2lzb25DaGFuY2UiLCJzaW5nbGVMb2ciLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInZhbHVlIiwiaW5kZXgiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImN1cnJlbnRQbGF5ZXIiLCJsYXN0RWxlbWVudCIsImxlbmd0aE5hbWUiLCJuYW1lIiwiZWxlbWVudExvZyIsInNsaWNlIiwiY3JpdGljRGFtYWdlIiwicHVzaCIsImNyZWF0ZUxvZyIs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TixVQUFJLENBQUMsS0FBS0YsVUFBVixFQUFzQjtBQUNwQlYsaUJBQVNvRSxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLQyxLQUFMLENBQVc1QyxJQUFYLENBQWdCLElBQWhCLENBQXJDLEVBQTRELEtBQTVEO0FBQ0Q7QUFDRCxXQUFLNkMsTUFBTDtBQUNBLFdBQUs3QixZQUFMO0FBQ0EsV0FBS3lCLFVBQUw7QUFDRDs7Ozs7O2tCQXBOa0IxRSxTIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXIuanMnXHJcbmltcG9ydCBTb3VuZCBmcm9tICcuL3NvdW5kLmpzJ1xyXG5cclxuZXhwb3J0IGxldCBwbGF5ZXIxID0gbmV3IENoYXJhY3RlcignWW91JylcclxuZXhwb3J0IGxldCBwbGF5ZXIyID0gbmV3IENoYXJhY3RlcignT3Bwb25lbnQnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgU291bmQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IHtcclxuICAgICAga2V5c0l0ZW06IHtcclxuICAgICAgICB3OiA4NyxcclxuICAgICAgICBhOiA2NSxcclxuICAgICAgICBzOiA4MyxcclxuICAgICAgICBkOiA2OFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgcGxheWVyTmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1uYW1lJyksXHJcbiAgICAgIGhlYWx0aDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWx0aCcpLFxyXG4gICAgICB3cmFwTG9nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9ncycpLFxyXG4gICAgICBlbExvZ3M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2dzIHAnKSxcclxuICAgICAgZWxLZXlzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5JyksXHJcbiAgICAgIG1lc3NhZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZXMnKSxcclxuICAgICAgYW5pbWF0ZUxvZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZy1hbmltYXRlJyksXHJcbiAgICAgIG51bWJlcnNMb2dzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVycy1sb2dzJylcclxuXHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWVTdGF0dXMgPSBmYWxzZVxyXG4gICAgdGhpcy5sb2dzID0gW11cclxuICAgIHRoaXMuY3VycmVudExvZyA9IDBcclxuICB9XHJcblxyXG4gIGF0dGFja1Byb2Nlc3MgKHBsYXllcjEsIHBsYXllcjIsIHBsYXllclNraWxsKSB7XHJcbiAgICBpZiAocGxheWVyMS5oZWFsdGggPiAwICYmIHBsYXllcjIuaGVhbHRoID4gMCkge1xyXG4gICAgICBwbGF5ZXJTa2lsbCgpXHJcblxyXG4gICAgICBwbGF5ZXIyLmhlYWx0aCAtPSBwbGF5ZXIxLmRhbWFnZVxyXG4gICAgICBwbGF5ZXIxLmhlYWx0aCArPSBwbGF5ZXIxLmRhbWFnZVxyXG5cclxuICAgICAgaWYgKHBsYXllcjEudGltZVBvaXNvbmluZyA+IDApIHtcclxuICAgICAgICBwbGF5ZXIyLmhlYWx0aCAtPSBwbGF5ZXIxLnBvaXNvbkRhbWFnZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBsYXllcjEucG9pc29uRGFtYWdlID0gMFxyXG4gICAgICAgIHBsYXllcjEucG9pc29uID0gdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRhbWFnZUluZm8ocGxheWVyMSlcclxuXHJcbiAgICAgIGlmIChwbGF5ZXIyLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5sb2dJbmZvKHBsYXllcjIsICdkaWVkJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcm91bmQgKGUpIHtcclxuICAgIGxldCBrZXlDb2RlID0gZS5rZXlDb2RlXHJcblxyXG4gICAgaWYgKGtleUNvZGUgPT09IDY1ICYmICFwbGF5ZXIxLnN0YXR1c1NraWxsKSB7XHJcbiAgICAgIGlmIChwbGF5ZXIxLmhlYWx0aCA+IDApIHtcclxuICAgICAgICBwbGF5ZXIxLnN0YXR1c1NraWxsID0gdHJ1ZVxyXG4gICAgICAgIGlmIChwbGF5ZXIxLnRpbWVQb2lzb25pbmcgPiAwKSB7XHJcbiAgICAgICAgICBwbGF5ZXIxLnRpbWVQb2lzb25pbmcgLT0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF0dGFja1Byb2Nlc3MocGxheWVyMSwgcGxheWVyMiwgcGxheWVyMS5zaW1wbGVBdHRhY2suYmluZChwbGF5ZXIxKSlcclxuICAgICAgICB0aGlzLm9wcG9uZW50U2V0KGtleUNvZGUpXHJcbiAgICAgICAgdGhpcy5pbml0U291bmQoa2V5Q29kZSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSA2OCAmJiAhcGxheWVyMS5zdGF0dXNTa2lsbCkge1xyXG4gICAgICBpZiAocGxheWVyMS5oZWFsdGggPiAwICYmIHBsYXllcjEucG90aW9uSGVhbHRoKSB7XHJcbiAgICAgICAgcGxheWVyMS5zdGF0dXNTa2lsbCA9IHRydWVcclxuICAgICAgICBwbGF5ZXIxLnVzZVBvdGlvbkhlYWx0aCgpXHJcbiAgICAgICAgdGhpcy5sb2dJbmZvKHBsYXllcjEsICd1c2UgcG90aW9uIGhlYWx0aCcpXHJcbiAgICAgICAgdGhpcy5vcHBvbmVudFNldChrZXlDb2RlKVxyXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kKGtleUNvZGUpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gODcgJiYgIXBsYXllcjEuc3RhdHVzU2tpbGwpIHtcclxuICAgICAgaWYgKHBsYXllcjEuaGVhbHRoID4gMCAmJiBwbGF5ZXIxLmZyb3plbikge1xyXG4gICAgICAgIHBsYXllcjEudXNlRnJvemVuKClcclxuICAgICAgICB0aGlzLmxvZ0luZm8ocGxheWVyMSwgJ3lvdXIgb3Bwb25lbnQgaXMgZnJvemVuJylcclxuICAgICAgICB0aGlzLmluaXRTb3VuZChrZXlDb2RlKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IDgzICYmICFwbGF5ZXIxLnN0YXR1c1NraWxsKSB7XHJcbiAgICAgIGlmIChwbGF5ZXIxLmhlYWx0aCA+IDApIHtcclxuICAgICAgICBwbGF5ZXIxLnN0YXR1c1NraWxsID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYXR0YWNrUHJvY2VzcyhwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIxLnBvaXNvbkF0dGFjay5iaW5kKHBsYXllcjEpKVxyXG4gICAgICAgIHRoaXMub3Bwb25lbnRTZXQoKVxyXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kKGtleUNvZGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29tcG9uZW50cy5lbEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGtleUNvZGUgPT09IHBhcnNlSW50KHRoaXMuY29tcG9uZW50cy5lbEtleXNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpKSkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5lbEtleXNbaV0uY2xhc3NMaXN0LmFkZCgna2V5LWFjdGl2ZScpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZWxLZXlzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2tleS1hY3RpdmUnKVxyXG4gICAgICAgIH0sIDMwMClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlSGVhbHRoKClcclxuICB9XHJcblxyXG4gIG9wcG9uZW50U2V0IChldktleSkge1xyXG4gICAgbGV0IHRpbWVSb3VuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzMDAwIC0gMTAwMCArIDEpKSArIDEwMDBcclxuXHJcbiAgICBpZiAocGxheWVyMi5oZWFsdGggPiAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwbGF5ZXIyLnBvdGlvbkhlYWx0aCAmJiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIDw9IDI1ICYmIHBsYXllcjIuaGVhbHRoIDw9IDUwKSB7XHJcbiAgICAgICAgICBwbGF5ZXIyLnVzZVBvdGlvbkhlYWx0aCgpXHJcbiAgICAgICAgICB0aGlzLmxvZ0luZm8ocGxheWVyMiwgJ3VzZSBwb3Rpb24gaGVhbHRoJylcclxuICAgICAgICAgIHRoaXMuaW5pdFNvdW5kKHRoaXMuY29tcG9uZW50cy5rZXlzSXRlbS5kKVxyXG4gICAgICAgICAgcGxheWVyMS5zdGF0dXNTa2lsbCA9IGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIyLmZyb3plbiAmJiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIDw9IDI1ICYmIHBsYXllcjIuaGVhbHRoIDw9IDc1KSB7XHJcbiAgICAgICAgICBwbGF5ZXIyLnVzZUZyb3plbigpXHJcbiAgICAgICAgICB0aGlzLmluaXRTb3VuZCh0aGlzLmNvbXBvbmVudHMua2V5c0l0ZW0udylcclxuICAgICAgICAgIHRoaXMubG9nSW5mbyhwbGF5ZXIyLCAneW91ciBvcHBvbmVudCBpcyBmcm96ZW4nKVxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIDw9IDM1ICYmIHBsYXllcjIucG9pc29uKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hdHRhY2tQcm9jZXNzKHBsYXllcjIsIHBsYXllcjEsIHBsYXllcjIucG9pc29uQXR0YWNrLmJpbmQocGxheWVyMikpXHJcbiAgICAgICAgICAgICAgdGhpcy5pbml0U291bmQodGhpcy5jb21wb25lbnRzLmtleXNJdGVtLnMpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcGxheWVyMi50aW1lUG9pc29uaW5nIC09IDFcclxuICAgICAgICAgICAgICB0aGlzLmF0dGFja1Byb2Nlc3MocGxheWVyMiwgcGxheWVyMSwgcGxheWVyMi5zaW1wbGVBdHRhY2suYmluZChwbGF5ZXIyKSlcclxuICAgICAgICAgICAgICB0aGlzLmluaXRTb3VuZCh0aGlzLmNvbXBvbmVudHMua2V5c0l0ZW0uYSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWx0aCgpXHJcbiAgICAgICAgICAgIHBsYXllcjEuc3RhdHVzU2tpbGwgPSBmYWxzZVxyXG4gICAgICAgICAgfSwgdGltZVJvdW5kKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSA8PSBwbGF5ZXIyLnBvaXNvbkNoYW5jZSAmJiBwbGF5ZXIyLnBvaXNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFja1Byb2Nlc3MocGxheWVyMiwgcGxheWVyMSwgcGxheWVyMi5wb2lzb25BdHRhY2suYmluZChwbGF5ZXIyKSlcclxuICAgICAgICAgICAgdGhpcy5pbml0U291bmQodGhpcy5jb21wb25lbnRzLmtleXNJdGVtLnMpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXIyLnRpbWVQb2lzb25pbmcgLT0gMVxyXG4gICAgICAgICAgICB0aGlzLmF0dGFja1Byb2Nlc3MocGxheWVyMiwgcGxheWVyMSwgcGxheWVyMi5zaW1wbGVBdHRhY2suYmluZChwbGF5ZXIyKSlcclxuICAgICAgICAgICAgdGhpcy5pbml0U291bmQodGhpcy5jb21wb25lbnRzLmtleXNJdGVtLmEpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWx0aCgpXHJcbiAgICAgICAgICBwbGF5ZXIxLnN0YXR1c1NraWxsID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRpbWVSb3VuZClcclxuICAgIH1cclxuICB9XHJcbiAgY3JlYXRlTG9nICgpIHtcclxuICAgIHRoaXMuc2luZ2xlTG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgdGhpcy5zaW5nbGVMb2cuY2xhc3NMaXN0LmFkZCgnbG9nXycgKyB0aGlzLmN1cnJlbnRMb2cpXHJcblxyXG4gICAgdGhpcy5sb2dzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICB0aGlzLnNpbmdsZUxvZy5pbm5lckhUTUwgPSB2YWx1ZVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRMb2crK1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50cy53cmFwTG9nLmFwcGVuZENoaWxkKHRoaXMuc2luZ2xlTG9nKVxyXG5cclxuICAgIHRoaXMuY29tcG9uZW50cy53cmFwTG9nLnNjcm9sbFRvcCA9IHRoaXMuY29tcG9uZW50cy53cmFwTG9nLnNjcm9sbEhlaWdodFxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZUxvZyAoY3VycmVudFBsYXllcikge1xyXG4gICAgbGV0IGxhc3RFbGVtZW50ID0gdGhpcy5sb2dzW3RoaXMubG9ncy5sZW5ndGggLSAxXVxyXG4gICAgbGV0IGxlbmd0aE5hbWUgPSBjdXJyZW50UGxheWVyLm5hbWUubGVuZ3RoICsgMlxyXG5cclxuICAgIGxldCBlbGVtZW50TG9nID0gbGFzdEVsZW1lbnQuc2xpY2UobGVuZ3RoTmFtZSwgbGFzdEVsZW1lbnQubGVuZ3RoKVxyXG5cclxuICAgIHRoaXMuY29tcG9uZW50cy5hbmltYXRlTG9nLmlubmVySFRNTCA9IGVsZW1lbnRMb2dcclxuICAgIHRoaXMuY29tcG9uZW50cy5hbmltYXRlTG9nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5hbmltYXRlTG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9LCAyMDAwKVxyXG4gIH1cclxuXHJcbiAgZGFtYWdlSW5mbyAoY3VycmVudFBsYXllcikge1xyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIuY3JpdGljRGFtYWdlID4gMCAmJiBjdXJyZW50UGxheWVyLnBvaXNvbkRhbWFnZSA9PT0gMCkge1xyXG4gICAgICB0aGlzLmxvZ3MucHVzaChjdXJyZW50UGxheWVyLm5hbWUgKyAnOiAnICsgJ2NyaXRpY2FsIGRhbWFnZSAnICsgY3VycmVudFBsYXllci5kYW1hZ2UpXHJcbiAgICAgIHRoaXMuYW5pbWF0ZUxvZyhjdXJyZW50UGxheWVyKVxyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyLmRhbWFnZSA9PT0gMCAmJiBjdXJyZW50UGxheWVyLnBvaXNvbikge1xyXG4gICAgICB0aGlzLmxvZ3MucHVzaChjdXJyZW50UGxheWVyLm5hbWUgKyAnOiAnICsgJ21pc3NlZCcpXHJcbiAgICAgIHRoaXMuYW5pbWF0ZUxvZyhjdXJyZW50UGxheWVyKVxyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyLnBvaXNvbkRhbWFnZSA+IDAgJiYgY3VycmVudFBsYXllci5kYW1hZ2UgPT09IDApIHtcclxuICAgICAgdGhpcy5sb2dzLnB1c2goY3VycmVudFBsYXllci5uYW1lICsgJzogJyArICdtaXNzZWQnICsgJyBhbmQgZGFtYWdlICcgKyBjdXJyZW50UGxheWVyLnBvaXNvbkRhbWFnZSArICcgZnJvbSBwb2lzb25pbmcnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIucG9pc29uRGFtYWdlID4gMCAmJiBjdXJyZW50UGxheWVyLmNyaXRpY0RhbWFnZSA+IDApIHtcclxuICAgICAgICB0aGlzLmxvZ3MucHVzaChjdXJyZW50UGxheWVyLm5hbWUgKyAnOiAnICsgJ2NyaXRpY2FsIGRhbWFnZSAnICsgY3VycmVudFBsYXllci5kYW1hZ2UgKyAnIGFuZCBkYW1hZ2UgJyArIGN1cnJlbnRQbGF5ZXIucG9pc29uRGFtYWdlICsgJyBmcm9tIHBvaXNvbmluZycpXHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllci5wb2lzb25EYW1hZ2UgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5sb2dzLnB1c2goY3VycmVudFBsYXllci5uYW1lICsgJzogJyArICdkYW1hZ2UgJyArIGN1cnJlbnRQbGF5ZXIuZGFtYWdlICsgJyBhbmQgZGFtYWdlICcgKyBjdXJyZW50UGxheWVyLnBvaXNvbkRhbWFnZSArICcgZnJvbSBwb2lzb25pbmcnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9ncy5wdXNoKGN1cnJlbnRQbGF5ZXIubmFtZSArICc6ICcgKyAnZGFtYWdlICcgKyBjdXJyZW50UGxheWVyLmRhbWFnZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jcmVhdGVMb2coKVxyXG4gICAgdGhpcy51cGRhdGVMb2dzKClcclxuICB9XHJcblxyXG4gIGxvZ0luZm8gKGN1cnJlbnRQbGF5ZXIsIGluZm9Ta2lsbCkge1xyXG4gICAgdGhpcy5sb2dzLnB1c2goY3VycmVudFBsYXllci5uYW1lICsgJzogJyArIGluZm9Ta2lsbClcclxuICAgIHRoaXMuY3JlYXRlTG9nKClcclxuICAgIHRoaXMuYW5pbWF0ZUxvZyhjdXJyZW50UGxheWVyKVxyXG4gICAgdGhpcy51cGRhdGVMb2dzKClcclxuICB9XHJcblxyXG4gIHVwZGF0ZUhlYWx0aCAoKSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMuaGVhbHRoLmlubmVySFRNTCA9IHBsYXllcjEuaGVhbHRoXHJcbiAgICB0aGlzLmNvbXBvbmVudHMucGxheWVyTmFtZS5pbm5lckhUTUwgPSBwbGF5ZXIxLm5hbWVcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxvZ3MgKCkge1xyXG4gICAgdGhpcy5jb21wb25lbnRzLm51bWJlcnNMb2dzLmlubmVySFRNTCA9IHRoaXMuY3VycmVudExvZyArICcvJyArIHRoaXMuY3VycmVudExvZ1xyXG4gIH1cclxuXHJcbiAgaW5pdCAoKSB7XHJcbiAgICBpZiAoIXRoaXMuZ2FtZVN0YXR1cykge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5yb3VuZC5iaW5kKHRoaXMpLCBmYWxzZSlcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdHVzKClcclxuICAgIHRoaXMudXBkYXRlSGVhbHRoKClcclxuICAgIHRoaXMudXBkYXRlTG9ncygpXHJcbiAgfVxyXG59XHJcbiJdfQ==
},{"./character.js":1,"./sound.js":4}],3:[function(require,module,exports){
'use strict';

var _dashboard = require('./dashboard.js');

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = document.querySelector('.theme');
var menu = document.querySelector('.theme-options__start');

menu.addEventListener('click', function () {
  theme.style.visibility = 'hidden';
  theme.style.opacity = '0';

  var dash = new _dashboard2.default();
  dash.init();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzc3M2MyZGEuanMiXSwibmFtZXMiOlsidGhlbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJkYXNoIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsSUFBTUMsT0FBT0YsU0FBU0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBYjs7QUFFQUMsS0FBS0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBSTtBQUNqQ0osUUFBTUssS0FBTixDQUFZQyxVQUFaLEdBQXlCLFFBQXpCO0FBQ0FOLFFBQU1LLEtBQU4sQ0FBWUUsT0FBWixHQUFzQixHQUF0Qjs7QUFFQSxNQUFJQyxPQUFPLHlCQUFYO0FBQ0FBLE9BQUtDLElBQUw7QUFDRCxDQU5EIiwiZmlsZSI6ImZha2VfMzc3M2MyZGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vZGFzaGJvYXJkLmpzJ1xyXG5cclxuY29uc3QgdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUnKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1vcHRpb25zX19zdGFydCcpO1xyXG5cclxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgdGhlbWUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gIHRoZW1lLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgXHJcbiAgbGV0IGRhc2ggPSBuZXcgRGFzaGJvYXJkKCk7XHJcbiAgZGFzaC5pbml0KClcclxufSlcclxuIl19
},{"./dashboard.js":2}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdW5kLmpzIl0sIm5hbWVzIjpbIlNvdW5kIiwic291bmRTdGF0dXMiLCJzb3VuZFRoZW1lIiwic291bmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0aGVtZVNvdW5kIiwiYnRuU291bmQiLCJxdWVyeVNlbGVjdG9yIiwia2V5Q29kZSIsInNyYyIsInBsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGF1c2UiLCJwYXVzZVRoZW1lIiwiYmluZCIsInRoZW1lIiwiZXZLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBLEs7QUFDbkIsbUJBQWU7QUFBQTs7QUFDYixTQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUMsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkYsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFsQjtBQUNBLFNBQUtFLFFBQUwsR0FBZ0JILFNBQVNJLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBaEI7QUFDRDs7Ozt5QkFFS0MsTyxFQUFTO0FBQ2IsVUFBSSxLQUFLUixXQUFULEVBQXNCO0FBQ3BCLGdCQUFRUSxPQUFSO0FBQ0UsZUFBSyxFQUFMO0FBQ0UsaUJBQUtOLEtBQUwsQ0FBV08sR0FBWCxHQUFpQixzQkFBakI7QUFDQSxpQkFBS1AsS0FBTCxDQUFXUSxJQUFYO0FBQ0E7O0FBRUYsZUFBSyxFQUFMO0FBQ0UsaUJBQUtSLEtBQUwsQ0FBV08sR0FBWCxHQUFpQix5QkFBakI7QUFDQSxpQkFBS1AsS0FBTCxDQUFXUSxJQUFYO0FBQ0E7O0FBRUYsZUFBSyxFQUFMO0FBQ0UsaUJBQUtSLEtBQUwsQ0FBV08sR0FBWCxHQUFpQix5QkFBakI7QUFDQSxpQkFBS1AsS0FBTCxDQUFXUSxJQUFYO0FBQ0E7O0FBRUYsZUFBSyxFQUFMO0FBQ0UsaUJBQUtSLEtBQUwsQ0FBV08sR0FBWCxHQUFpQix5QkFBakI7QUFDQSxpQkFBS1AsS0FBTCxDQUFXUSxJQUFYO0FBQ0E7QUFuQko7QUFxQkQ7QUFDRjs7OzRCQUVRO0FBQUE7O0FBQ1AsVUFBSSxLQUFLVixXQUFULEVBQXNCO0FBQ3BCLGFBQUtLLFVBQUwsQ0FBZ0JJLEdBQWhCLEdBQXNCLDJCQUF0QjtBQUNBLGFBQUtKLFVBQUwsQ0FBZ0JLLElBQWhCOztBQUVBLGFBQUtMLFVBQUwsQ0FBZ0JNLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxZQUFNO0FBQzlDLGdCQUFLTixVQUFMLENBQWdCSSxHQUFoQixHQUFzQixvQkFBdEI7QUFDQSxnQkFBS0osVUFBTCxDQUFnQkssSUFBaEI7QUFDRCxTQUhEO0FBSUQ7QUFDRjs7O2lDQUVhO0FBQ1osV0FBS1QsVUFBTCxHQUFrQixDQUFDLEtBQUtBLFVBQXhCOztBQUVBLFVBQUksS0FBS0EsVUFBVCxFQUFxQjtBQUNuQixhQUFLSyxRQUFMLENBQWNNLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLEtBQS9CO0FBQ0EsYUFBS1IsVUFBTCxDQUFnQkssSUFBaEI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLSixRQUFMLENBQWNNLFNBQWQsQ0FBd0JFLEdBQXhCLENBQTRCLEtBQTVCO0FBQ0EsYUFBS1QsVUFBTCxDQUFnQlUsS0FBaEI7QUFDRDtBQUNGOzs7NkJBRVM7QUFDUixXQUFLVCxRQUFMLENBQWNLLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLEtBQUtLLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQXhDO0FBQ0EsV0FBS0MsS0FBTDtBQUNEOzs7OEJBRVVDLEssRUFBTztBQUNoQixXQUFLVCxJQUFMLENBQVVTLEtBQVY7QUFDRDs7Ozs7O2tCQWxFa0JwQixLIiwiZmlsZSI6InNvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuc291bmRTdGF0dXMgPSB0cnVlXHJcbiAgICB0aGlzLnNvdW5kVGhlbWUgPSB0cnVlXHJcbiAgICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKVxyXG4gICAgdGhpcy50aGVtZVNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKVxyXG4gICAgdGhpcy5idG5Tb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc291bmQnKVxyXG4gIH1cclxuXHJcbiAgcGxheSAoa2V5Q29kZSkge1xyXG4gICAgaWYgKHRoaXMuc291bmRTdGF0dXMpIHtcclxuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSA2NTpcclxuICAgICAgICAgIHRoaXMuc291bmQuc3JjID0gJ3NvdW5kcy9oaXRfc291bmQud2F2J1xyXG4gICAgICAgICAgdGhpcy5zb3VuZC5wbGF5KClcclxuICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgIGNhc2UgNjg6XHJcbiAgICAgICAgICB0aGlzLnNvdW5kLnNyYyA9ICdzb3VuZHMvcG90aW9uX3NvdW5kLndhdidcclxuICAgICAgICAgIHRoaXMuc291bmQucGxheSgpXHJcbiAgICAgICAgICBicmVha1xyXG5cclxuICAgICAgICBjYXNlIDg3OlxyXG4gICAgICAgICAgdGhpcy5zb3VuZC5zcmMgPSAnc291bmRzL2Zyb3plbl9zb3VuZC53YXYnXHJcbiAgICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKVxyXG4gICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgY2FzZSA4MzpcclxuICAgICAgICAgIHRoaXMuc291bmQuc3JjID0gJ3NvdW5kcy9wb2lzb25fc291bmQud2F2J1xyXG4gICAgICAgICAgdGhpcy5zb3VuZC5wbGF5KClcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoZW1lICgpIHtcclxuICAgIGlmICh0aGlzLnNvdW5kU3RhdHVzKSB7XHJcbiAgICAgIHRoaXMudGhlbWVTb3VuZC5zcmMgPSAnc291bmRzL3BpbV9wb3lfcG9ja2V0LndhdidcclxuICAgICAgdGhpcy50aGVtZVNvdW5kLnBsYXkoKVxyXG5cclxuICAgICAgdGhpcy50aGVtZVNvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGhlbWVTb3VuZC5zcmMgPSAnc291bmRzL3BpbV9wb3kud2F2J1xyXG4gICAgICAgIHRoaXMudGhlbWVTb3VuZC5wbGF5KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBhdXNlVGhlbWUgKCkge1xyXG4gICAgdGhpcy5zb3VuZFRoZW1lID0gIXRoaXMuc291bmRUaGVtZVxyXG5cclxuICAgIGlmICh0aGlzLnNvdW5kVGhlbWUpIHtcclxuICAgICAgdGhpcy5idG5Tb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdvZmYnKVxyXG4gICAgICB0aGlzLnRoZW1lU291bmQucGxheSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJ0blNvdW5kLmNsYXNzTGlzdC5hZGQoJ29mZicpXHJcbiAgICAgIHRoaXMudGhlbWVTb3VuZC5wYXVzZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0dXMgKCkge1xyXG4gICAgdGhpcy5idG5Tb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucGF1c2VUaGVtZS5iaW5kKHRoaXMpKVxyXG4gICAgdGhpcy50aGVtZSgpXHJcbiAgfVxyXG5cclxuICBpbml0U291bmQgKGV2S2V5KSB7XHJcbiAgICB0aGlzLnBsYXkoZXZLZXkpXHJcbiAgfVxyXG59XHJcbiJdfQ==
},{}]},{},[3])