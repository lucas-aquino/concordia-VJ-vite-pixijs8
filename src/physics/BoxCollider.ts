import { ColorSource, Container, Graphics, Rectangle, Ticker } from "pixi.js";
import ICollidable from "./ICollidable";
import { IUpdateable } from "../IUpdateable";


export class BoxCollider extends Container implements ICollidable, IUpdateable {
  
  collitionArea: Graphics;

  color : ColorSource

  debug : boolean = false

  constructor(props : any) {
    super()

    const {
      x = 0,
      y = 0,
      width = 50,
      height = 50,
      color = 0xA569BD,
      debug = false
    } = props

    this.debug = debug
    
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    
    this.collitionArea = new Graphics()
    .rect(x, y, width, height)
    .fill({
      color: color, 
      alpha: 0.1 * Number(this.debug),
    })
    .stroke({
      color: color, 
      alpha: 0.8  * Number(this.debug),
      width: 1
    })
    
    this.addChild(this.collitionArea)
  }
  
  update(ticker: Ticker): void {
    
  }


  checkCollision(collition : ICollidable): Rectangle | null {
    const rA = this.getCollisionArea()
    const rB = collition.getCollisionArea()

    const rightMostLeft = rA.left < rB.left ? rB.left : rA.left
    const leftMostRight = rA.right > rB.right ? rB.right : rA.right
    const bottomMostTop = rA.top < rB.top ? rB.top : rA.top
    const topMostBottom = rA.bottom > rB.bottom ? rB.bottom : rA.bottom

    const makesSenseHorizontal = rightMostLeft < leftMostRight
    const makesSenseVertical = bottomMostTop < topMostBottom
    
    if( makesSenseHorizontal && makesSenseVertical ){
      const retVal = new Rectangle()

      retVal.x = rightMostLeft
      retVal.y = bottomMostTop

      retVal.width = leftMostRight - rightMostLeft
      retVal.height = bottomMostTop - topMostBottom

      return retVal
    }

    return null
  }


  getCollisionArea(): Rectangle {
    return this.collitionArea.getBounds().rectangle
  }

  getContainer() : Container {
    return this
  }

}