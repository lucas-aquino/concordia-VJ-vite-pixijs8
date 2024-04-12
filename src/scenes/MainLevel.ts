import { Container, Graphics, Rectangle, Text, Ticker } from "pixi.js";
import { Player, PlayerAnimations } from "../entities/Player";
import { IUpdateable } from "../IUpdateable";
import { HEIGHT, WIDTH } from "../app";
import { checkCollision } from "../physics/physics";
import ICollidable from "../physics/ICollidable";
import { BoxCollider } from "../physics/BoxCollider";
import { Button } from "../ui/Button";




export class MainLevel extends Container implements IUpdateable {

  player : Player

  childEntities : Array<any> = new Array<any>()

  childrenCollider : Array<ICollidable> = new Array<ICollidable>()

  playerStats : Text

  botonCamaraLenta : Button

  velocidadCamara : number

  isCamaraLenta : boolean = false

  constructor() {
    super()

    this.player = new Player()

    this.player.playAnimation(PlayerAnimations.idle)


    this.player.x = WIDTH / 2
    this.player.y = HEIGHT / 2

    this.player.speed = 5


    this.playerStats = new Text({ 
      text: 'loading...', 
      style :{
        fontFamily: 'JetBrains Mono',
        fontSize: 10,
        fill: 0xffffff,
        fontWeight: 'lighter',
        whiteSpace: 'pre-line'
      }
    })
    
    this.playerStats.x = -20

    this.velocidadCamara = 1

    this.botonCamaraLenta = new Button({
      realessedTextureAlias: 'btn_realessed_blue',
      pressedTextureAlias: 'btn_pressed_blue',
      disabledTextureAlias: 'btn_disabled',
      overTextureAlias: 'btn_over',
      width: 200,
      height: 30,
      text: 'Camara lenta',
      callback: () => {
        if(!this.isCamaraLenta){
          this.velocidadCamara = 0.0001
          this.isCamaraLenta = true
          return
        }
        this.isCamaraLenta = false
        this.velocidadCamara = 1
      }
    })

    this.botonCamaraLenta.x = 350
    this.botonCamaraLenta.y = 10
    
    const plataforma = new BoxCollider({
      x: 0,
      y: 290,
      width: 850,
      height: 50,
      debug: true
    })


    const plataforma2 = new BoxCollider({
      x: 0,
      y: 200,
      width: 700,
      height: 20,
      debug: true
    })
   
    const paredIzquierda = new BoxCollider({
      x: 0,
      y: 0,
      width: 10,
      height: 700,
      debug: true
    })
    
    const paredDerecha = new BoxCollider({
      x: 395,
      y: 0,
      width: 10,
      height: 700,
      debug: true
    })
    
    this.addChild(plataforma)
    this.addChild(plataforma2)
    this.addChild(paredIzquierda)
    this.addChild(paredDerecha)
    this.addChild(this.botonCamaraLenta)    
    
    this.childrenCollider.push(plataforma)
    this.childrenCollider.push(plataforma2)
    this.childrenCollider.push(paredIzquierda)
    this.childrenCollider.push(paredDerecha)



    
    this.childEntities.forEach((e) => {
      this.addChild(e)
    })
    this.addChild(this.player)
    this.addChild(this.playerStats)
  }

  update(ticker: Ticker): void {

    ticker.deltaTime *= this.velocidadCamara

    this.player.update(ticker)

    this.childEntities.forEach((e) => {
      e.update(ticker)
    })

    
    this.childrenCollider.forEach((c) => {
      const overlap = c.checkCollision(this.player.collider)
      


      if(overlap) {

        const overlapGraph
        this.player.velocity.x = 0
        this.player.velocity.y = 0
        if(Math.abs(overlap.width) < Math.abs(overlap.height)){
          if (this.player.x > overlap.x) {
            this.player.velocity.x = 0
            this.player.x -= overlap.width
            console.log('->')
            return
          } else if (this.player.x < overlap.x) {
            this.player.velocity.x = 0
            this.player.x += overlap.width
            console.log('<-')
            return
          }
        } else if(Math.abs(overlap.width) > Math.abs(overlap.height)) {
          if (this.player.y > overlap.y) {
            this.player.velocity.y = 0
            this.player.y -= overlap.height
            console.log('A')
            return
          } else if (this.player.y < overlap.y) {
            this.player.velocity.y = 0
            this.player.y += overlap.height
            this.player.canJump = true
            console.log('v')
            return
          }
        }
      }

    })

    //this.player.collider.checkCollision()

    /*

    const overlap = checkCollision(this.player.collider, this.childEntities[0].collider)

    

    if(overlap) {
      this.player.velocity.x = 0
      this.player.velocity.y = 0
      if(Math.abs(overlap.width) < Math.abs(overlap.height)){
        if (this.player.x > overlap.x) {
          this.player.x += overlap.width
        } else if (this.player.x < overlap.x) {
          this.player.x -= overlap.width
        }
      } else {
        if (this.player.y > overlap.y) {
          this.player.y -= overlap.height
        } else if (this.player.y < overlap.y) {
          this.player.y += overlap.height
        }
      }

    }
    */

    this.playerStats.text = `
      player_position: ${this.player.x}, ${this.player.y} 
      player_velocity: ${this.player.velocity.x}, ${this.player.velocity.y}  
      player_acceleration: ${this.player.acceleration.x}, ${this.player.acceleration.y}
      player_can_jump: ${this.player.canJump}
    `
  }
}


