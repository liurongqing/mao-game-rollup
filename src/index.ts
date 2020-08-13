import "phaser"
import * as scenes from './scenes'

const scene = []
for (let i in scenes) {
  scene.push(scenes[i])
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  audio: {
    noAudio: true
  },
  banner: {
    hidePhaser: true
  },
  scene,
}

const game = new Phaser.Game(config)
