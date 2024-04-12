import { Container, Graphics, Rectangle } from "pixi.js";
import { checkCollision } from './physics';

export default interface ICollidable {

  collitionArea : Graphics

  getCollisionArea() : Rectangle

  checkCollision(collition : ICollidable) : Rectangle | null
  
  getContainer() : Container
}