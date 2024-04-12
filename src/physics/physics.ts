import { Point, Rectangle } from "pixi.js";
import ICollidable from "./ICollidable";


export const GRAVITY = 9.8



export function checkCollision(obj : ICollidable, objb : ICollidable) : Rectangle | null{

  const rA = obj.getCollisionArea()
  const rB = objb.getCollisionArea()


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


export function normalizeVector2D(vector: Point): Point {
  const {x, y} = vector;

  
  if (x === 0 && y === 0) {
    return new Point(0, 0)
  }

  const magnitude = Math.sqrt(x * x + y * y)
  return new Point(x / magnitude, y / magnitude)
}
