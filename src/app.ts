import { Application } from "pixi.js"
import { Scene } from "./Scene"
import { assetLoad } from "./assets"




const canvas : HTMLCanvasElement = document.getElementById('app-canvas') as HTMLCanvasElement

const app = new Application()

await app.init({
  canvas,
  background: 0x000,
  resizeTo: window
})

await assetLoad()

const MainScene = new Scene()

app.stage.addChild(MainScene)

