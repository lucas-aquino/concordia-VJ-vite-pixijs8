import { Container, NineSliceSprite, Text, Texture } from "pixi.js"

interface ButtonProps {
  realessedTextureAlias : string,
  disabledTextureAlias: string,
  pressedTextureAlias : string,
  overTextureAlias: string,
  text: string,
  width: number,
  height: number,
  callback: Function
}

export class Button extends Container {

  text : string
  
  private textObject : Text
  
  private enable : boolean

  private realessedTexture : Texture
  private pressedTexture : Texture
  private disabledTexture : Texture
  private overTexture : Texture

  private texture : NineSliceSprite

  private pressed : boolean

  private verticalCenter : number
  private horizontalCenter : number

  private callback : Function

  constructor( btnProps : ButtonProps ) {
    super()

    this.interactive = true

    this.pressed = false
    this.text = btnProps.text

    this.verticalCenter = btnProps.height / 2
    this.horizontalCenter = btnProps.width / 2

    
    this.realessedTexture = Texture.from(btnProps.realessedTextureAlias)
    this.pressedTexture = Texture.from(btnProps.pressedTextureAlias)
    this.disabledTexture = Texture.from(btnProps.disabledTextureAlias)
    this.overTexture = Texture.from(btnProps.overTextureAlias)
    
    this.texture = new NineSliceSprite({
      texture: Texture.from(btnProps.overTextureAlias),
      leftWidth: 35,
      topHeight: 35,
      rightWidth: 35,
      bottomHeight: 35,
      width: btnProps.width,
      height: btnProps.height,
    })
    
    this.callback = btnProps.callback

    this.textObject = new Text(this.text, {
      fontSize: 24,
      fill: 0xffffff,
    })

    this.textObject.anchor.x = 0.5
    this.textObject.anchor.y = 0.5

    this.textObject.position.x = this.horizontalCenter
    this.textObject.position.y = this.verticalCenter

    
    this.enable = true

    this.texture.texture = this.realessedTexture

    this.addChild(this.texture)
    this.addChild(this.textObject)

    this.on('mousedown', this.onButtonPressed)
    this.on('mouseup', this.onButtonRealessed)
    this.on('mouseover', this.onMouseOver)
    this.on('mouseout', this.onMouseOut)
  }

  setEnable() {
    this.enable = !this.enable
    this.interactive = this.enable
    
    this.texture.texture = this.realessedTexture

    if(this.enable){
      return
    }

    this.texture.texture = this.disabledTexture

  }

  private onButtonPressed(): void {
    this.pressed = true
    this.textObject.position.y = this.verticalCenter + 2
    this.texture.texture = this.pressedTexture
  }
  
  private onButtonRealessed(): void {
    this.pressed = false
    this.textObject.position.y = this.verticalCenter
    this.texture.texture = this.overTexture
    this.callback()
  }

  private onMouseOver() : void {
    if(!this.pressed){
      this.texture.texture = this.overTexture
    }
  }

  private onMouseOut() : void {
    if(!this.pressed){
      this.texture.texture = this.realessedTexture
    }
  }

  get isPressed() : boolean {
    return this.pressed
  }
}







