import Character from './character.js'
import Sound from './sound.js'

export let player1 = new Character('You')
export let player2 = new Character('Opponent')

export default class Dashboard extends Sound {
  constructor () {
    super()
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

    }
    this.gameStatus = false
    this.logs = []
    this.currentLog = 0
  }

  attackProcess (player1, player2, playerSkill) {
    if (player1.health > 0 && player2.health > 0) {
      playerSkill()

      player2.health -= player1.damage
      player1.health += player1.damage

      if (player1.timePoisoning > 0) {
        player2.health -= player1.poisonDamage
      } else {
        player1.poisonDamage = 0
        player1.poison = true
      }

      this.damageInfo(player1)

      if (player2.health <= 0) {
        this.logInfo(player2, 'died')
      }
    }
  }

  round (e) {
    let keyCode = e.keyCode

    if (keyCode === 65 && !player1.statusSkill) {
      if (player1.health > 0) {
        player1.statusSkill = true
        if (player1.timePoisoning > 0) {
          player1.timePoisoning -= 1
        }
        this.attackProcess(player1, player2, player1.simpleAttack.bind(player1))
        this.opponentSet(keyCode)
        this.initSound(keyCode)
      }
    } else if (keyCode === 68 && !player1.statusSkill) {
      if (player1.health > 0 && player1.potionHealth) {
        player1.statusSkill = true
        player1.usePotionHealth()
        this.logInfo(player1, 'use potion health')
        this.opponentSet(keyCode)
        this.initSound(keyCode)
      }
    } else if (keyCode === 87 && !player1.statusSkill) {
      if (player1.health > 0 && player1.frozen) {
        player1.useFrozen()
        this.logInfo(player1, 'your opponent is frozen')
        this.initSound(keyCode)
      }
    } else if (keyCode === 83 && !player1.statusSkill) {
      if (player1.health > 0) {
        player1.statusSkill = true
        this.attackProcess(player1, player2, player1.poisonAttack.bind(player1))
        this.opponentSet()
        this.initSound(keyCode)
      }
    }

    for (let i = 0; i < this.components.elKeys.length; i++) {
      if (keyCode === parseInt(this.components.elKeys[i].getAttribute('data-key'))) {
        this.components.elKeys[i].classList.add('key-active')
        setTimeout(() => {
          this.components.elKeys[i].classList.remove('key-active')
        }, 300)
      }
    }

    this.updateHealth()
  }

  opponentSet (evKey) {
    let timeRound = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000

    if (player2.health > 0) {
      setTimeout(() => {
        if (player2.potionHealth && Math.floor(Math.random() * 100) <= 25 && player2.health <= 50) {
          player2.usePotionHealth()
          this.logInfo(player2, 'use potion health')
          this.initSound(this.components.keysItem.d)
          player1.statusSkill = false
        } else if (player2.frozen && Math.floor(Math.random() * 100) <= 25 && player2.health <= 75) {
          player2.useFrozen()
          this.initSound(this.components.keysItem.w)
          this.logInfo(player2, 'your opponent is frozen')
          setTimeout(() => {
            if (Math.floor(Math.random() * 100) <= 35 && player2.poison) {
              this.attackProcess(player2, player1, player2.poisonAttack.bind(player2))
              this.initSound(this.components.keysItem.s)
            } else {
              player2.timePoisoning -= 1
              this.attackProcess(player2, player1, player2.simpleAttack.bind(player2))
              this.initSound(this.components.keysItem.a)
            }
            this.updateHealth()
            player1.statusSkill = false
          }, timeRound)
        } else {
          if (Math.floor(Math.random() * 100) <= player2.poisonChance && player2.poison) {
            this.attackProcess(player2, player1, player2.poisonAttack.bind(player2))
            this.initSound(this.components.keysItem.s)
          } else {
            player2.timePoisoning -= 1
            this.attackProcess(player2, player1, player2.simpleAttack.bind(player2))
            this.initSound(this.components.keysItem.a)
          }
          this.updateHealth()
          player1.statusSkill = false
        }
      }, timeRound)
    }
  }
  createLog () {
    this.singleLog = document.createElement('p')

    this.singleLog.classList.add('log_' + this.currentLog)

    this.logs.forEach((value, index) => {
      this.singleLog.innerHTML = value
    })

    this.currentLog++

    this.components.wrapLog.appendChild(this.singleLog)

    this.components.wrapLog.scrollTop = this.components.wrapLog.scrollHeight
  }

  animateLog (currentPlayer) {
    let lastElement = this.logs[this.logs.length - 1]
    let lengthName = currentPlayer.name.length + 2

    let elementLog = lastElement.slice(lengthName, lastElement.length)

    this.components.animateLog.innerHTML = elementLog
    this.components.animateLog.classList.add('active')

    setTimeout(() => {
      this.components.animateLog.classList.remove('active')
    }, 2000)
  }

  damageInfo (currentPlayer) {
    if (currentPlayer.criticDamage > 0 && currentPlayer.poisonDamage === 0) {
      this.logs.push(currentPlayer.name + ': ' + 'critical damage ' + currentPlayer.damage)
      this.animateLog(currentPlayer)
    } else if (currentPlayer.damage === 0 && currentPlayer.poison) {
      this.logs.push(currentPlayer.name + ': ' + 'missed')
      this.animateLog(currentPlayer)
    } else if (currentPlayer.poisonDamage > 0 && currentPlayer.damage === 0) {
      this.logs.push(currentPlayer.name + ': ' + 'missed' + ' and damage ' + currentPlayer.poisonDamage + ' from poisoning')
    } else {
      if (currentPlayer.poisonDamage > 0 && currentPlayer.criticDamage > 0) {
        this.logs.push(currentPlayer.name + ': ' + 'critical damage ' + currentPlayer.damage + ' and damage ' + currentPlayer.poisonDamage + ' from poisoning')
      } else if (currentPlayer.poisonDamage > 0) {
        this.logs.push(currentPlayer.name + ': ' + 'damage ' + currentPlayer.damage + ' and damage ' + currentPlayer.poisonDamage + ' from poisoning')
      } else {
        this.logs.push(currentPlayer.name + ': ' + 'damage ' + currentPlayer.damage)
      }
    }
    this.createLog()
    this.updateLogs()
  }

  logInfo (currentPlayer, infoSkill) {
    this.logs.push(currentPlayer.name + ': ' + infoSkill)
    this.createLog()
    this.animateLog(currentPlayer)
    this.updateLogs()
  }

  updateHealth () {
    this.components.health.innerHTML = player1.health
    this.components.playerName.innerHTML = player1.name
  }

  updateLogs () {
    this.components.numbersLogs.innerHTML = this.currentLog + '/' + this.currentLog
  }

  init () {
    if (!this.gameStatus) {
      document.addEventListener('keydown', this.round.bind(this), false)
    }
    this.status()
    this.updateHealth()
    this.updateLogs()
  }
}
