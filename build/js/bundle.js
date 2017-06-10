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
    this.statusSkill = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJuYW1lIiwiaGVhbHRoIiwiZGFtYWdlIiwibWF4RGFtYWdlIiwiY3JpdGljYWxDaGFuY2UiLCJwb3Rpb25IZWFsdGgiLCJjcml0aWNEYW1hZ2UiLCJmcm96ZW4iLCJzdGF0dXNTa2lsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsUztBQUNuQixxQkFBWUMsSUFBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxHQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7Ozs7bUNBRWE7QUFDWixXQUFLTixNQUFMLEdBQWNPLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixFQUEzQixDQUFkO0FBQ0UsVUFBR0YsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLEdBQTNCLEtBQW1DLEtBQUtQLGNBQTNDLEVBQTBEO0FBQ3hELGFBQUtGLE1BQUwsSUFBZSxLQUFLQSxNQUFMLEdBQWMsTUFBTSxHQUFOLEdBQVksS0FBS0EsTUFBOUM7QUFDQSxhQUFLSSxZQUFMLEdBQW9CLEtBQUtKLE1BQXpCO0FBQ0EsYUFBS0QsTUFBTCxJQUFlLEtBQUtDLE1BQXBCO0FBQ0EsYUFBS0MsU0FBTCxJQUFrQixLQUFLRCxNQUF2QjtBQUNELE9BTEQsTUFNTTtBQUNGLGFBQUtELE1BQUwsSUFBZSxLQUFLQyxNQUFwQjtBQUNBLGFBQUtDLFNBQUwsSUFBa0IsS0FBS0QsTUFBdkI7QUFDQSxhQUFLSSxZQUFMLEdBQW9CLENBQXBCO0FBQ0Q7QUFDTjs7O3NDQUVnQjtBQUNmLFVBQUcsS0FBS0QsWUFBUixFQUFxQjtBQUNuQixhQUFLSixNQUFMLElBQWUsRUFBZjtBQUNBLGFBQUtJLFlBQUwsR0FBb0IsS0FBcEI7QUFDRDtBQUNGOzs7Z0NBRVU7QUFDVCxXQUFLRSxNQUFMLEdBQWMsS0FBZDtBQUNEOzs7Ozs7a0JBckNrQlIsUyIsImZpbGUiOiJjaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJ7XHJcbiAgY29uc3RydWN0b3IobmFtZSl7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcbiAgICB0aGlzLmRhbWFnZSA9IDA7XHJcbiAgICB0aGlzLm1heERhbWFnZSA9IDA7XHJcbiAgICB0aGlzLmNyaXRpY2FsQ2hhbmNlID0gMTY7XHJcbiAgICB0aGlzLnBvdGlvbkhlYWx0aCA9IHRydWU7XHJcbiAgICB0aGlzLmNyaXRpY0RhbWFnZSA9IDA7XHJcbiAgICB0aGlzLmZyb3plbiA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXR1c1NraWxsID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNpbXBsZUF0dGFjaygpe1xyXG4gICAgdGhpcy5kYW1hZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNCk7XHJcbiAgICAgIGlmKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgPD0gdGhpcy5jcml0aWNhbENoYW5jZSl7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgKz0gdGhpcy5kYW1hZ2UgKyAxMDAgLyAxMDAgKiB0aGlzLmRhbWFnZTtcclxuICAgICAgICB0aGlzLmNyaXRpY0RhbWFnZSA9IHRoaXMuZGFtYWdlO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IHRoaXMuZGFtYWdlO1xyXG4gICAgICAgIHRoaXMubWF4RGFtYWdlICs9IHRoaXMuZGFtYWdlO1xyXG4gICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHRoaXMuaGVhbHRoIC09IHRoaXMuZGFtYWdlO1xyXG4gICAgICAgICAgdGhpcy5tYXhEYW1hZ2UgKz0gdGhpcy5kYW1hZ2U7XHJcbiAgICAgICAgICB0aGlzLmNyaXRpY0RhbWFnZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlUG90aW9uSGVhbHRoKCl7XHJcbiAgICBpZih0aGlzLnBvdGlvbkhlYWx0aCl7XHJcbiAgICAgIHRoaXMuaGVhbHRoICs9IDUwO1xyXG4gICAgICB0aGlzLnBvdGlvbkhlYWx0aCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRnJvemVuKCl7XHJcbiAgICB0aGlzLmZyb3plbiA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dashboard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _character = require('./character.js');

var _character2 = _interopRequireDefault(_character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dashboard = exports.Dashboard = function () {
  function Dashboard() {
    _classCallCheck(this, Dashboard);

    this.components = {
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
    this.gameStatus = false;
    this.logs = [];
    this.currentLog = 0;
  }

  _createClass(Dashboard, [{
    key: 'attackProcess',
    value: function attackProcess(player1, player2) {
      if (player1.health > 0 && player2.health > 0) {

        player1.simpleAttack();

        player2.health -= player1.damage;
        player1.health += player1.damage;

        this.damageInfo(player1);

        if (player2.health <= 0) {
          this.diedInfo(player2);
        }
      }

      this.gameStatus = true;
    }
  }, {
    key: 'round',
    value: function round(event) {
      var _this = this;

      var keyCode = event.keyCode;
      var timeRound = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;

      if (!this.gameStatus && keyCode == 65 && player1.statusSkill) {

        if (player1.health > 0) {
          this.attackProcess(player1, player2);
        }

        if (player2.health > 0) {
          setTimeout(function () {
            if (player2.potionHealth && Math.floor(Math.random() * 100) <= 25 && player2.health <= 50) {
              player2.usePotionHealth();
              _this.potionInfo(player2);
            } else if (player2.frozen && Math.floor(Math.random() * 100) <= 25 && player2.health <= 50) {
              player2.useFrozen();
              _this.frozenInfo(player2);
              player1.statusSkill = false;
              setTimeout(function () {
                _this.attackProcess(player2, player1);
                _this.updateHealth();
                player1.statusSkill = true;
                _this.gameStatus = false;
              }, timeRound);
            } else {
              _this.attackProcess(player2, player1);
              _this.updateHealth();
            }
            _this.gameStatus = false;
          }, timeRound);
        }
      }

      if (!this.gameStatus && keyCode == 68 && player1.statusSkill) {
        if (player1.potionHealth) {
          player1.usePotionHealth();
          this.potionInfo(player1);
          player1.statusSkill = false;
          setTimeout(function () {
            _this.attackProcess(player2, player1);
            _this.updateHealth();
            player1.statusSkill = true;
            _this.gameStatus = false;
          }, timeRound);
        }
      }

      if (!this.gameStatus && keyCode == 87 && player1.statusSkill) {
        if (player1.frozen) {
          player1.useFrozen();
          this.frozenInfo(player1);
        }
      }

      var _loop = function _loop(i) {
        if (keyCode == parseInt(_this.components.elKeys[i].getAttribute('data-key'))) {
          _this.components.elKeys[i].classList.add('key-active');
          setTimeout(function () {
            _this.components.elKeys[i].classList.remove('key-active');
          }, 300);
        }
      };

      for (var i = 0; i < this.components.elKeys.length; i++) {
        _loop(i);
      }

      this.updateHealth();
      this.chatScroll();
    }
  }, {
    key: 'createLog',
    value: function createLog() {
      var _this2 = this;

      this.singleLog = document.createElement('p');

      this.singleLog.classList.add('log_' + this.currentLog);

      this.logs.forEach(function (value, index) {
        _this2.singleLog.innerHTML = value;
      });

      this.currentLog++;

      this.components.wrapLog.appendChild(this.singleLog);
    }
  }, {
    key: 'damageInfo',
    value: function damageInfo(currentPlayer) {
      if (currentPlayer.criticDamage > 0) {
        this.logs.push(currentPlayer.name + ': ' + 'critical damage ' + currentPlayer.damage);
        this.animateLog(currentPlayer);
      } else if (currentPlayer.damage == 0) {
        this.logs.push(currentPlayer.name + ': ' + 'missed');
        this.animateLog(currentPlayer);
      } else {
        this.logs.push(currentPlayer.name + ': ' + 'damage ' + currentPlayer.damage);
      }

      this.createLog();
      this.updateLogs();
      this.chatScroll();
    }
  }, {
    key: 'potionInfo',
    value: function potionInfo(currentPlayer) {
      this.logs.push(currentPlayer.name + ': ' + 'use potion health');
      this.createLog();
      this.animateLog(currentPlayer);
      this.updateLogs();
      this.chatScroll();
    }
  }, {
    key: 'frozenInfo',
    value: function frozenInfo(currentPlayer) {
      this.logs.push(currentPlayer.name + ': ' + 'your opponent is frozen');
      this.createLog();
      this.animateLog(currentPlayer);
      this.updateLogs();
      this.chatScroll();
    }
  }, {
    key: 'diedInfo',
    value: function diedInfo(currentPlayer) {
      this.logs.push(currentPlayer.name + ': ' + 'died');
      this.animateLog(currentPlayer);
      this.createLog();
      this.updateLogs();
      this.chatScroll();
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
    key: 'animateLog',
    value: function animateLog(currentPlayer) {
      var _this3 = this;

      var lastElement = this.logs[this.logs.length - 1];
      var lengthName = currentPlayer.name.length + 2;

      var elementLog = lastElement.slice(lengthName, lastElement.length);

      this.components.animateLog.innerHTML = elementLog;
      this.components.animateLog.classList.add('active');

      setTimeout(function () {
        _this3.components.animateLog.classList.remove('active');
      }, 2000);
    }
  }, {
    key: 'chatScroll',
    value: function chatScroll() {
      this.components.wrapLog.scrollTop = this.components.wrapLog.scrollHeight;
    }
  }, {
    key: 'init',
    value: function init() {
      if (!this.gameStatus) {
        document.addEventListener('keydown', this.round.bind(this), false);
      }

      this.updateHealth();
      this.updateLogs();
    }
  }]);

  return Dashboard;
}();

var player1 = new _character2.default('You');
var player2 = new _character2.default('Opponent');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJjb21wb25lbnRzIiwia2V5c0l0ZW0iLCJ3IiwiYSIsInMiLCJkIiwicGxheWVyTmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWx0aCIsIndyYXBMb2ciLCJlbExvZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxLZXlzIiwibWVzc2FnZXMiLCJhbmltYXRlTG9nIiwibnVtYmVyc0xvZ3MiLCJnYW1lU3RhdHVzIiwibG9ncyIsImN1cnJlbnRMb2ciLCJwbGF5ZXIxIiwicGxheWVyMiIsInNpbXBsZUF0dGFjayIsImRhbWFnZSIsImRhbWFnZUluZm8iLCJkaWVkSW5mbyIsImV2ZW50Iiwia2V5Q29kZSIsInRpbWVSb3VuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN0YXR1c1NraWxsIiwiYXR0YWNrUHJvY2VzcyIsInNldFRpbWVvdXQiLCJwb3Rpb25IZWFsdGgiLCJ1c2VQb3Rpb25IZWFsdGgiLCJwb3Rpb25JbmZvIiwiZnJvemVuIiwidXNlRnJvemVuIiwiZnJvemVuSW5mbyIsInVwZGF0ZUhlYWx0aCIsImkiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImxlbmd0aCIsImNoYXRTY3JvbGwiLCJzaW5nbGVMb2ciLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInZhbHVlIiwiaW5kZXgiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImN1cnJlbnRQbGF5ZXIiLCJjcml0aWNEYW1hZ2UiLCJwdXNoIiwibmFtZSIsImNyZWF0ZUxvZyIsInVwZGF0ZUxvZ3MiLCJsYXN0RWxlbWVudCIsImxlbmd0aE5hbWUiLCJlbGVtZW50TG9nIiwic2xpY2UiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicm91bmQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7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IENoYXJhY3RlciBmcm9tICcuL2NoYXJhY3Rlci5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJke1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGtleXNJdGVtOiB7XHJcbiAgICAgICAgdzogODcsXHJcbiAgICAgICAgYTogNjUsXHJcbiAgICAgICAgczogODMsXHJcbiAgICAgICAgZDogNjhcclxuICAgICAgfSxcclxuICAgICAgcGxheWVyTmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1uYW1lJyksXHJcbiAgICAgIGhlYWx0aDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWx0aCcpLFxyXG4gICAgICB3cmFwTG9nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9ncycpLFxyXG4gICAgICBlbExvZ3M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2dzIHAnKSxcclxuICAgICAgZWxLZXlzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5JyksXHJcbiAgICAgIG1lc3NhZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZXMnKSxcclxuICAgICAgYW5pbWF0ZUxvZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZy1hbmltYXRlJyksXHJcbiAgICAgIG51bWJlcnNMb2dzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVycy1sb2dzJylcclxuICAgIH1cclxuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5sb2dzID0gW107XHJcbiAgICB0aGlzLmN1cnJlbnRMb2cgPSAwO1xyXG4gIH1cclxuXHJcbmF0dGFja1Byb2Nlc3MocGxheWVyMSwgcGxheWVyMil7XHJcbiAgaWYocGxheWVyMS5oZWFsdGggPiAwICYmIHBsYXllcjIuaGVhbHRoID4gMCl7XHJcblxyXG4gICAgcGxheWVyMS5zaW1wbGVBdHRhY2soKTtcclxuXHJcbiAgICBwbGF5ZXIyLmhlYWx0aCAtPSBwbGF5ZXIxLmRhbWFnZTtcclxuICAgIHBsYXllcjEuaGVhbHRoICs9IHBsYXllcjEuZGFtYWdlO1xyXG5cclxuICAgIHRoaXMuZGFtYWdlSW5mbyhwbGF5ZXIxKTtcclxuXHJcbiAgICBpZihwbGF5ZXIyLmhlYWx0aCA8PTApe1xyXG4gICAgICAgIHRoaXMuZGllZEluZm8ocGxheWVyMik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgICB0aGlzLmdhbWVTdGF0dXMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcm91bmQoZXZlbnQpe1xyXG4gIGxldCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcclxuICBsZXQgdGltZVJvdW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDMwMDAgLSAxMDAwICsgMSkpICsgMTAwMDtcclxuXHJcbiAgaWYoIXRoaXMuZ2FtZVN0YXR1cyAmJiBrZXlDb2RlID09IDY1ICYmIHBsYXllcjEuc3RhdHVzU2tpbGwpe1xyXG5cclxuICAgICAgaWYocGxheWVyMS5oZWFsdGggPiAwKXtcclxuICAgICAgICB0aGlzLmF0dGFja1Byb2Nlc3MocGxheWVyMSwgcGxheWVyMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHBsYXllcjIuaGVhbHRoID4gMCl7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgaWYocGxheWVyMi5wb3Rpb25IZWFsdGggJiYgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSA8PSAyNSAmJiBwbGF5ZXIyLmhlYWx0aCA8PTUwKXtcclxuICAgICAgICAgICAgcGxheWVyMi51c2VQb3Rpb25IZWFsdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3Rpb25JbmZvKHBsYXllcjIpO1xuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBlbHNlIGlmKHBsYXllcjIuZnJvemVuICYmIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgPD0gMjUgJiYgcGxheWVyMi5oZWFsdGggPD01MCl7XHJcbiAgICAgICAgICAgIHBsYXllcjIudXNlRnJvemVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuSW5mbyhwbGF5ZXIyKTtcclxuICAgICAgICAgICAgcGxheWVyMS5zdGF0dXNTa2lsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgdGhpcy5hdHRhY2tQcm9jZXNzKHBsYXllcjIsIHBsYXllcjEpO1xyXG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlSGVhbHRoKCk7XHJcbiAgICAgICAgICAgICAgcGxheWVyMS5zdGF0dXNTa2lsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIHRpbWVSb3VuZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFja1Byb2Nlc3MocGxheWVyMiwgcGxheWVyMSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGVhbHRoKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB9LHRpbWVSb3VuZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgaWYoIXRoaXMuZ2FtZVN0YXR1cyAmJiBrZXlDb2RlID09IDY4ICYmIHBsYXllcjEuc3RhdHVzU2tpbGwpe1xyXG4gICAgaWYgKHBsYXllcjEucG90aW9uSGVhbHRoKXtcclxuICAgICAgcGxheWVyMS51c2VQb3Rpb25IZWFsdGgoKTtcclxuICAgICAgdGhpcy5wb3Rpb25JbmZvKHBsYXllcjEpO1xyXG4gICAgICBwbGF5ZXIxLnN0YXR1c1NraWxsID0gZmFsc2U7XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICB0aGlzLmF0dGFja1Byb2Nlc3MocGxheWVyMiwgcGxheWVyMSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIZWFsdGgoKTtcclxuICAgICAgICBwbGF5ZXIxLnN0YXR1c1NraWxsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgfSwgdGltZVJvdW5kKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmKCF0aGlzLmdhbWVTdGF0dXMgJiYga2V5Q29kZSA9PSA4NyAmJiBwbGF5ZXIxLnN0YXR1c1NraWxsKXtcclxuICAgIGlmKHBsYXllcjEuZnJvemVuKXtcclxuICAgICAgcGxheWVyMS51c2VGcm96ZW4oKTtcclxuICAgICAgdGhpcy5mcm96ZW5JbmZvKHBsYXllcjEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmZvcihsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmVsS2V5cy5sZW5ndGg7IGkrKyl7XHJcbiAgaWYoa2V5Q29kZSA9PSBwYXJzZUludCh0aGlzLmNvbXBvbmVudHMuZWxLZXlzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSkpe1xyXG4gICAgdGhpcy5jb21wb25lbnRzLmVsS2V5c1tpXS5jbGFzc0xpc3QuYWRkKCdrZXktYWN0aXZlJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmVsS2V5c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdrZXktYWN0aXZlJyk7XHJcbiAgICB9LDMwMClcclxuICB9XHJcbn1cclxuXHJcblxyXG4gIHRoaXMudXBkYXRlSGVhbHRoKCk7XHJcbiAgdGhpcy5jaGF0U2Nyb2xsKCk7XHJcbn1cclxuXHJcbmNyZWF0ZUxvZygpe1xyXG4gIHRoaXMuc2luZ2xlTG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICB0aGlzLnNpbmdsZUxvZy5jbGFzc0xpc3QuYWRkKCdsb2dfJyArIHRoaXMuY3VycmVudExvZyk7XHJcblxyXG4gIHRoaXMubG9ncy5mb3JFYWNoKCh2YWx1ZSxpbmRleCk9PntcclxuICAgIHRoaXMuc2luZ2xlTG9nLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICB0aGlzLmN1cnJlbnRMb2crKztcclxuXHJcbiAgdGhpcy5jb21wb25lbnRzLndyYXBMb2cuYXBwZW5kQ2hpbGQodGhpcy5zaW5nbGVMb2cpO1xyXG59XHJcblxyXG5kYW1hZ2VJbmZvKGN1cnJlbnRQbGF5ZXIpe1xyXG4gIGlmKGN1cnJlbnRQbGF5ZXIuY3JpdGljRGFtYWdlID4gMCl7XHJcbiAgICB0aGlzLmxvZ3MucHVzaChjdXJyZW50UGxheWVyLm5hbWUgKyc6ICcrICdjcml0aWNhbCBkYW1hZ2UgJytjdXJyZW50UGxheWVyLmRhbWFnZSk7XHJcbiAgICB0aGlzLmFuaW1hdGVMb2coY3VycmVudFBsYXllcik7XHJcbiAgfVxyXG5cclxuICBlbHNlIGlmKGN1cnJlbnRQbGF5ZXIuZGFtYWdlID09IDApe1xyXG4gICAgdGhpcy5sb2dzLnB1c2goY3VycmVudFBsYXllci5uYW1lICsnOiAnKyAnbWlzc2VkJyk7XHJcbiAgICB0aGlzLmFuaW1hdGVMb2coY3VycmVudFBsYXllcik7XHJcbiAgfVxyXG5cclxuICBlbHNle1xyXG4gICAgICB0aGlzLmxvZ3MucHVzaChjdXJyZW50UGxheWVyLm5hbWUgKyc6ICcrICdkYW1hZ2UgJytjdXJyZW50UGxheWVyLmRhbWFnZSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmNyZWF0ZUxvZygpO1xyXG4gIHRoaXMudXBkYXRlTG9ncygpO1xyXG4gIHRoaXMuY2hhdFNjcm9sbCgpO1xyXG59XHJcblxyXG5wb3Rpb25JbmZvKGN1cnJlbnRQbGF5ZXIpe1xyXG4gIHRoaXMubG9ncy5wdXNoKGN1cnJlbnRQbGF5ZXIubmFtZSArJzogJysgJ3VzZSBwb3Rpb24gaGVhbHRoJyk7XHJcbiAgdGhpcy5jcmVhdGVMb2coKTtcclxuICB0aGlzLmFuaW1hdGVMb2coY3VycmVudFBsYXllcik7XHJcbiAgdGhpcy51cGRhdGVMb2dzKCk7XHJcbiAgdGhpcy5jaGF0U2Nyb2xsKCk7XHJcbn1cclxuXHJcbmZyb3plbkluZm8oY3VycmVudFBsYXllcil7XHJcbiAgdGhpcy5sb2dzLnB1c2goY3VycmVudFBsYXllci5uYW1lICsnOiAnKyAneW91ciBvcHBvbmVudCBpcyBmcm96ZW4nKTtcclxuICB0aGlzLmNyZWF0ZUxvZygpO1xyXG4gIHRoaXMuYW5pbWF0ZUxvZyhjdXJyZW50UGxheWVyKTtcclxuICB0aGlzLnVwZGF0ZUxvZ3MoKTtcclxuICB0aGlzLmNoYXRTY3JvbGwoKTtcclxufVxyXG5cclxuZGllZEluZm8oY3VycmVudFBsYXllcil7XHJcbiAgdGhpcy5sb2dzLnB1c2goY3VycmVudFBsYXllci5uYW1lICsnOiAnKyAnZGllZCcpO1xyXG4gIHRoaXMuYW5pbWF0ZUxvZyhjdXJyZW50UGxheWVyKTtcclxuICB0aGlzLmNyZWF0ZUxvZygpO1xyXG4gIHRoaXMudXBkYXRlTG9ncygpO1xyXG4gIHRoaXMuY2hhdFNjcm9sbCgpO1xyXG59XHJcblxyXG51cGRhdGVIZWFsdGgoKXtcclxuICB0aGlzLmNvbXBvbmVudHMuaGVhbHRoLmlubmVySFRNTCA9IHBsYXllcjEuaGVhbHRoO1xyXG4gIHRoaXMuY29tcG9uZW50cy5wbGF5ZXJOYW1lLmlubmVySFRNTCA9IHBsYXllcjEubmFtZTtcclxufVxyXG51cGRhdGVMb2dzKCl7XHJcbiAgdGhpcy5jb21wb25lbnRzLm51bWJlcnNMb2dzLmlubmVySFRNTCA9IHRoaXMuY3VycmVudExvZyArICcvJyArIHRoaXMuY3VycmVudExvZztcclxufVxyXG5cclxuYW5pbWF0ZUxvZyhjdXJyZW50UGxheWVyKXtcclxuICBsZXQgbGFzdEVsZW1lbnQgPSB0aGlzLmxvZ3NbdGhpcy5sb2dzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBsZW5ndGhOYW1lID0gY3VycmVudFBsYXllci5uYW1lLmxlbmd0aCArIDI7XHJcblxyXG4gIGxldCBlbGVtZW50TG9nID0gbGFzdEVsZW1lbnQuc2xpY2UobGVuZ3RoTmFtZSwgbGFzdEVsZW1lbnQubGVuZ3RoKTtcclxuXHJcbiAgdGhpcy5jb21wb25lbnRzLmFuaW1hdGVMb2cuaW5uZXJIVE1MID0gZWxlbWVudExvZztcclxuICB0aGlzLmNvbXBvbmVudHMuYW5pbWF0ZUxvZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgdGhpcy5jb21wb25lbnRzLmFuaW1hdGVMb2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSwyMDAwKVxyXG59XHJcblxyXG5jaGF0U2Nyb2xsKCl7XHJcbiAgdGhpcy5jb21wb25lbnRzLndyYXBMb2cuc2Nyb2xsVG9wID0gdGhpcy5jb21wb25lbnRzLndyYXBMb2cuc2Nyb2xsSGVpZ2h0O1xyXG59XHJcblxyXG5pbml0KCl7XHJcbiAgaWYoIXRoaXMuZ2FtZVN0YXR1cyl7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnJvdW5kLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHRoaXMudXBkYXRlSGVhbHRoKCk7XHJcbiAgdGhpcy51cGRhdGVMb2dzKCk7XHJcbn1cclxufVxyXG5cclxuY29uc3QgcGxheWVyMSA9IG5ldyBDaGFyYWN0ZXIoJ1lvdScpO1xyXG5jb25zdCBwbGF5ZXIyID0gbmV3IENoYXJhY3RlcignT3Bwb25lbnQnKTtcclxuIl19
},{"./character.js":1}],3:[function(require,module,exports){
'use strict';

var _character = require('./character.js');

var _character2 = _interopRequireDefault(_character);

var _dashboard = require('./dashboard.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('load', function () {
  var dash = new _dashboard.Dashboard();
  dash.init();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOGY0ZGFkN2YuanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhc2giLCJpbml0Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFHQUEsT0FBT0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBSTtBQUNsQyxNQUFNQyxPQUFPLDBCQUFiO0FBQ0FBLE9BQUtDLElBQUw7QUFDRCxDQUhEIiwiZmlsZSI6ImZha2VfOGY0ZGFkN2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vY2hhcmFjdGVyLmpzJztcclxuaW1wb3J0IHtEYXNoYm9hcmR9IGZyb20gJy4vZGFzaGJvYXJkLmpzJztcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XHJcbiAgY29uc3QgZGFzaCA9IG5ldyBEYXNoYm9hcmQoKTtcclxuICBkYXNoLmluaXQoKTtcclxufSk7XHJcbiJdfQ==
},{"./character.js":1,"./dashboard.js":2}]},{},[3])