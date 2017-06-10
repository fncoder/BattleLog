import Character from './character.js'

export class Dashboard {
  constructor () {
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

  attackProcess (player1, player2) {
    if (player1.health > 0 && player2.health > 0) {
      player1.simpleAttack()

      player2.health -= player1.damage
      player1.health += player1.damage

      this.damageInfo(player1)

      if (player2.health <= 0) {
        this.diedInfo(player2)
      }
    }

    this.gameStatus = true
  }

  round (event) {
    let keyCode = event.keyCode
    let timeRound = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000

    if (!this.gameStatus && keyCode === 65 && player1.statusSkill) {
      if (player1.health > 0) {
        this.attackProcess(player1, player2)
      }

      if (player2.health > 0) {
        setTimeout(() => {
          if (player2.potionHealth && Math.floor(Math.random() * 100) <= 25 && player2.health <= 50) {
            player2.usePotionHealth()
            this.potionInfo(player2)
          } else if (player2.frozen && Math.floor(Math.random() * 100) <= 25 && player2.health <= 50) {
            player2.useFrozen()
            this.frozenInfo(player2)
            player1.statusSkill = false
            setTimeout(() => {
              this.attackProcess(player2, player1)
              this.updateHealth()
              player1.statusSkill = true
              this.gameStatus = false
            }, timeRound)
          } else {
            this.attackProcess(player2, player1)
            this.updateHealth()
          }
          this.gameStatus = false
        }, timeRound)
      }
    }

    if (!this.gameStatus && keyCode === 68 && player1.statusSkill) {
      if (player1.potionHealth) {
        player1.usePotionHealth()
        this.potionInfo(player1)
        player1.statusSkill = false
        setTimeout(() => {
          this.attackProcess(player2, player1)
          this.updateHealth()
          player1.statusSkill = true
          this.gameStatus = false
        }, timeRound)
      }
    }

    if (!this.gameStatus && keyCode === 87 && player1.statusSkill) {
      if (player1.frozen) {
        player1.useFrozen()
        this.frozenInfo(player1)
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
    this.chatScroll()
  }

  createLog () {
    this.singleLog = document.createElement('p')

    this.singleLog.classList.add('log_' + this.currentLog)

    this.logs.forEach((value, index) => {
      this.singleLog.innerHTML = value
    })

    this.currentLog++

    this.components.wrapLog.appendChild(this.singleLog)
  }

  damageInfo (currentPlayer) {
    if (currentPlayer.criticDamage > 0) {
      this.logs.push(currentPlayer.name + ': ' + 'critical damage ' + currentPlayer.damage)
      this.animateLog(currentPlayer)
    } else if (currentPlayer.damage === 0) {
      this.logs.push(currentPlayer.name + ': ' + 'missed')
      this.animateLog(currentPlayer)
    } else {
      this.logs.push(currentPlayer.name + ': ' + 'damage ' + currentPlayer.damage)
    }

    this.createLog()
    this.updateLogs()
    this.chatScroll()
  }

  potionInfo (currentPlayer) {
    this.logs.push(currentPlayer.name + ': ' + 'use potion health')
    this.createLog()
    this.animateLog(currentPlayer)
    this.updateLogs()
    this.chatScroll()
  }

  frozenInfo (currentPlayer) {
    this.logs.push(currentPlayer.name + ': ' + 'your opponent is frozen')
    this.createLog()
    this.animateLog(currentPlayer)
    this.updateLogs()
    this.chatScroll()
  }

  diedInfo (currentPlayer) {
    this.logs.push(currentPlayer.name + ': ' + 'died')
    this.animateLog(currentPlayer)
    this.createLog()
    this.updateLogs()
    this.chatScroll()
  }

  updateHealth () {
    this.components.health.innerHTML = player1.health
    this.components.playerName.innerHTML = player1.name
  }
  updateLogs () {
    this.components.numbersLogs.innerHTML = this.currentLog + '/' + this.currentLog
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

  chatScroll () {
    this.components.wrapLog.scrollTop = this.components.wrapLog.scrollHeight
  }

  init () {
    if (!this.gameStatus) {
      document.addEventListener('keydown', this.round.bind(this), false)
    }

    this.updateHealth()
    this.updateLogs()
  }
}

const player1 = new Character('You')
const player2 = new Character('Opponent')
