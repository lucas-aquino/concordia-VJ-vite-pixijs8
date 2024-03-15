import { Container, NineSliceSprite, Texture } from "pixi.js";

interface PanelArguments {
  width: number,
  height: number,
  x: number,
  y: number
}

export class Panel extends Container {

  panel : NineSliceSprite



  constructor( panelParametro : PanelArguments) { 
    super()
    
    this.panel = new NineSliceSprite({
      texture: Texture.from('grey_panel'),
      leftWidth: 35,
      topHeight: 35,
      rightWidth: 35,
      bottomHeight: 35,
      width: panelParametro.width,
      height: panelParametro.height
    })

    this.position.x = panelParametro.x
    this.position.y = panelParametro.y

    this.addChild(this.panel)
  }


  setWidth(_width : number) {
    this.panel.width = _width
  }

  setHeight(_height : number) {
    this.panel.height = _height
  }

}



