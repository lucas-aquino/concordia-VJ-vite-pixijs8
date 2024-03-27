import { Container, Point, Ticker } from "pixi.js";
import { IUpdateable } from "../IUpdateable";



export class RigidBody extends Container implements IUpdateable {


  public speed : Point = new Point( 0, 0 )
  public acceleration : Point = new Point( 0, 0 )
  public gravity : boolean = false

  

  private gravityScalar : number

  constructor () {
    super()
    this.gravityScalar = 9.8
  }


  update(ticker: Ticker): void {
    this.x += this.speed.x * ticker.deltaTime + 1/2 * this.acceleration.x * Math.pow(ticker.deltaTime, 2)
    this.y += this.speed.y * ticker.deltaTime + 1/2 * this.acceleration.y * Math.pow(ticker.deltaTime, 2)
  
    this.speed.x = this.acceleration.x * ticker.deltaTime
    this.speed.y = this.acceleration.y * ticker.deltaTime
  }


}





