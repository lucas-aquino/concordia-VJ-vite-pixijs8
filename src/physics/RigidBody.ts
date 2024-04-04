import { Container, Point, Ticker } from "pixi.js";
import { IUpdateable } from "../IUpdateable";
import { GRAVITY } from "./physics";


export class RigidBody extends Container implements IUpdateable {


  public gravity : boolean = false
  
  public velocity : Point = new Point()
  public mass : number
  public friction : number
  


  protected _acceleration : Point = new Point()
  private gravityScalar : number

  constructor (mass : number = 1, friction : number = 0.5) {
    super()
    
    this.velocity.x = 0
    this.velocity.y = 0

    console.log(this.velocity)

    this.mass = mass
    this.friction = friction

    this.gravityScalar = GRAVITY
  }


  update({ deltaTime } : Ticker) : void {
    

    this.x += this.velocity.x * deltaTime
    this.y += this.velocity.y * deltaTime
    
    let frictionForce = new Point(0, 0) 
    //TODO: NORMALIZAR VELOCITY
    frictionForce.x = this.velocity.x * ( -this.friction * this.mass * deltaTime )
    frictionForce.y = this.velocity.y * ( -this.friction * this.mass * deltaTime )

    this.velocity.x += frictionForce.x
    this.velocity.y += frictionForce.y

    if (this.gravity) {
      let gravityForce = this.gravityScalar * (this.mass * deltaTime)
      this.velocity.y += gravityForce
    }
    
  }

  addForce (...axis : number[]) : void {

    const [x = 0, y = 0] = axis

    this._acceleration = new Point(x, y)

    this._acceleration.x = x / this.mass
    this._acceleration.y = y / this.mass

    this.velocity.x = this.velocity.x + this._acceleration.x 
    this.velocity.y = this.velocity.y + this._acceleration.y 
    
  }

  get acceleration() : Point {
    return this._acceleration
  }
}
