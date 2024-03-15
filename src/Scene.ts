import { Container, NineSliceSprite, Texture } from "pixi.js"
import { Panel } from "./ui/Panel"
import { Button } from "./ui/Button"


export class Scene extends Container {

  constructor() {
    super()

    const panel = new Panel({
      width: 500,
      height: 800,
      x: 750,
      y: 100
    })


    const btnStart = new Button({
      realessedTextureAlias: 'btn_realessed_blue',
      pressedTextureAlias: 'btn_pressed_blue',
      disabledTextureAlias: 'btn_disabled',
      width: 200,
      height: 70,
      text: 'Start'
    })

    btnStart.position.x = 150
    btnStart.position.y = 650
    

    console.log('isPressed: ', btnStart.isPressed)
    panel.addChild(btnStart)

    this.addChild(panel)
  }
}

