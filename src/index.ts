import * as scenes from '@/scenes';
import * as scenes from '@/scenes1123123'

const scene = []
for (let i in scenes) {
  scene.push(scenes[i])
}

const a = {}
console.log(a?.b?.c ?? 123)

const config: any = {
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'app',
    width: 750,
    height: 1334
  },
  scene,
}

window.game = new Phaser.Game(config)
