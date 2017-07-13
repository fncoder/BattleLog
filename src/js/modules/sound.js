export default class Sound {
  constructor () {
    this.soundStatus = true
    this.soundTheme = true
    this.sound = document.createElement('audio')
    this.themeSound = document.createElement('audio')
    this.btnSound = document.querySelector('.btn-sound')
  }

  play (keyCode) {
    if (this.soundStatus) {
      switch (keyCode) {
        case 65:
          this.sound.src = 'sounds/hit_sound.wav'
          this.sound.play()
          break

        case 68:
          this.sound.src = 'sounds/potion_sound.wav'
          this.sound.play()
          break

        case 87:
          this.sound.src = 'sounds/frozen_sound.wav'
          this.sound.play()
          break

        case 83:
          this.sound.src = 'sounds/poison_sound.wav'
          this.sound.play()
          break
      }
    }
  }

  theme () {
    if (this.soundStatus) {
      this.themeSound.src = 'sounds/pim_poy_pocket.wav'
      this.themeSound.play()

      this.themeSound.addEventListener('ended', () => {
        this.themeSound.src = 'sounds/pim_poy.wav'
        this.themeSound.play()
      })
    }
  }

  pauseTheme () {
    this.soundTheme = !this.soundTheme

    if (this.soundTheme) {
      this.btnSound.classList.remove('off')
      this.themeSound.play()
    } else {
      this.btnSound.classList.add('off')
      this.themeSound.pause()
    }
  }

  status () {
    this.btnSound.addEventListener('click', this.pauseTheme.bind(this))
    this.theme()
  }

  initSound (evKey) {
    this.play(evKey)
  }
}
