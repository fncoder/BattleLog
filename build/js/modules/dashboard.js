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