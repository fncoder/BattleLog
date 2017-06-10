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
    this.statusSkill = true
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
