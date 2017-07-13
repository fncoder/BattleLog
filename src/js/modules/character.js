export default class Character {
  constructor (name) {
    this.name = name
    this.health = 100
    this.damage = 0
    this.maxDamage = 0
    this.criticalChance = 16
    this.potionHealth = true
    this.criticDamage = 0
    this.frozen = true
    this.statusSkill = false
    this.poisonDamage = 0
    this.poison = true
    this.timePoisoning = 0
    this.poisonChance = 16
  }

  simpleAttack () {
    this.damage = Math.floor(Math.random() * 24)
    if (Math.floor(Math.random() * 100) <= this.criticalChance) {
      this.damage += this.damage + 100 / 100 * this.damage
      this.criticDamage = this.damage
      this.health -= this.damage
      this.maxDamage += this.damage
    } else {
      this.health -= this.damage
      this.maxDamage += this.damage
      this.criticDamage = 0
    }
  }

  poisonAttack () {
    this.damage = Math.floor(Math.random() * 10)
    if (Math.floor(Math.random() * 100) <= this.poisonChance && this.poison) {
      this.timePoisoning = 3
      this.poisonDamage = Math.floor(Math.random() * (30 - 10 + 1)) + 10
      this.health -= this.damage
      this.maxDamage += this.damage
      this.poison = false
    } else {
      this.health -= this.damage
      this.maxDamage += this.damage
      this.timePoisoning -= 1
      if (this.timePoisoning === 0) {
        this.timePoisoning = 0
        this.poisonDamage = 0
        this.poison = true
      }
    }
  }

  usePotionHealth () {
    if (this.potionHealth) {
      this.health += 50
      this.potionHealth = false
    }
  }

  useFrozen () {
    this.frozen = false
  }
}
