import { Container, NineSliceSprite, Sprite, Text, Texture } from "pixi.js"

interface ButtonProps {
  realessedTextureAlias : string,
  pressedTextureAlias : string,
  disabledTextureAlias: string
  text: string,
  width: number,
  height: number
}

export class Button extends Container {

  text : string
  
  private textObject : Text
  
  private enable : boolean

  private realessedTexture : NineSliceSprite
  private pressedTexture : NineSliceSprite
  private disabledTexture : NineSliceSprite

  private pressed : boolean

  private verticalCenter : number
  private horizontalCenter : number

  constructor( btnProps : ButtonProps ) {
    super()

    this.interactive = true

    this.pressed = false
    this.text = btnProps.text

    this.verticalCenter = btnProps.height / 2
    this.horizontalCenter = btnProps.width / 2

    const propsTexture = {
      leftWidth: 35,
      topHeight: 35,
      rightWidth: 35,
      bottomHeight: 35,
      width: btnProps.width,
      height: btnProps.height,
    }
    
    this.realessedTexture = new NineSliceSprite({
      texture: Texture.from(btnProps.realessedTextureAlias),
      ...propsTexture
    })
    
    this.pressedTexture = new NineSliceSprite({
      texture: Texture.from(btnProps.pressedTextureAlias),
      ...propsTexture
    })

    this.disabledTexture = new NineSliceSprite({
      texture: Texture.from(btnProps.disabledTextureAlias),
      ...propsTexture
    })

    

    this.textObject = new Text(this.text, {
      fontSize: 24,
      fill: 0xffffff,
    })

    this.textObject.anchor.x = 0.5
    this.textObject.anchor.y = 0.5

    this.textObject.position.x = this.horizontalCenter
    this.textObject.position.y = this.verticalCenter

    
    this.enable = true
    this.pressedTexture.visible = false
    this.disabledTexture.visible = false

    
    
    this.addChild(this.realessedTexture)
    this.addChild(this.pressedTexture)
    this.addChild(this.disabledTexture)
    this.addChild(this.textObject)

    this.on('mousedown', this.onButtonPressed)
    this.on('mouseup', this.onButtonRealessed)
  }

  setEnable() {
    this.enable = !this.enable
    this.interactive = this.enable
    this.disabledTexture.visible = !this.enable
  }

  onButtonPressed(): void {
    console.log('isPressed')
    this.pressed = true
    this.textObject.position.y = this.verticalCenter + 2
    this.pressedTexture.visible = this.pressed
    this.realessedTexture.visible = !this.pressed
  }

  onButtonRealessed(): void {
    console.log('isRealessed')
    this.pressed = false
    this.textObject.position.y = this.verticalCenter
    this.pressedTexture.visible = this.pressed
    this.realessedTexture.visible = !this.pressed
  }

  get isPressed() : boolean {
    return this.pressed
  }
}



