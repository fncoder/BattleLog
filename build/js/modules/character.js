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