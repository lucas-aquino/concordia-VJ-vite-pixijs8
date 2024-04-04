import { Container, Point, Ticker } from "pixi.js";
import { Player, PlayerAnimations } from "../entities/Player";
import { IUpdateable } from "../IUpdateable";
import { Text } from "pixi.js";
import { HEIGHT, WIDTH } from "../app";




export class MainLevel extends Container implements IUpdateable {

  player : Player

  playerStats : Text

  constructor() {
    super()

    this.player = new Player()

    this.player.playAnimation(PlayerAnimations.idle)

    this.player.gravity = false

    this.player.x = WIDTH / 2
    this.player.y = HEIGHT / 2

    this.player.jumpForce = 20

    this.playerStats = new Text({ 
      text: 'loading...', 
      style :{
        fontSize: 10,
        fill: 0xffffff,
      }
    })

    this.addChild(this.player)
    this.addChild(this.playerStats)
  }

  update(ticker: Ticker): void {
    this.player.update(ticker)

    this.playerStats.text = `
      player_position: ${this.player.x.toFixed(2)}, ${this.player.y.toFixed(2)} 
      player_velocity: ${this.player.velocity.x.toFixed(2)}, ${this.player.velocity.y.toFixed(2)}  
      player_acceleration: ${this.player.acceleration.x.toFixed(2)}, ${this.player.acceleration.y.toFixed(2)}  
    `
  }
}


