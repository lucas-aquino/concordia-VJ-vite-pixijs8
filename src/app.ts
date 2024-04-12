import { Application } from "pixi.js"
import { Scene } from "./Scene"
import { assetLoad } from "./assets"
import { Keyboard } from "./events/Keyboard"


export const WIDTH = 800
export const HEIGHT = 600

const canvas : HTMLCanvasElement = document.getElementById('app-canvas') as HTMLCanvasElement

const app = new Application()

Keyboard.initialize()

await app.init({
  canvas,
  background: 0x000,
  width: WIDTH,
  height: HEIGHT
})

await assetLoad()

const MainScene = new Scene()

app.stage.addChild(MainScene)




