import 'phaser'


import * as scenes from './scenes'

const scene = []
for (let i in scenes) {
    scene.push(scenes[i])
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#122333',
    width: 800,
    height: 600,
    scene,
    audio: {
        noAudio: true
    },
    banner: {
        hidePhaser: true
    }
}

const game = new Phaser.Game(config)
