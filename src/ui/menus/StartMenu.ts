import { Button } from "../Button"
import { Panel } from "../Panel"




export class StartMenu extends Panel {

  private startButton : Button

  constructor() {
    super({
      width: 500,
      height: 800,
      x: 750,
      y: 100
    })

    this.startButton = new Button({
      realessedTextureAlias: 'btn_realessed_blue',
      pressedTextureAlias: 'btn_pressed_blue',
      disabledTextureAlias: 'btn_disabled',
      overTextureAlias: 'btn_over',
      width: 200,
      height: 70,
      text: 'Start',
      callback: () => {
        
      }
    })

    this.startButton.position.x = 150
    this.startButton.position.y = 650
    

    console.log('isPressed: ', this.startButton.isPressed)
    
    this.addChild(this.startButton)
  }
}


