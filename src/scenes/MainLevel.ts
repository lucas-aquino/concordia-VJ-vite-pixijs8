import { Container, Ticker } from "pixi.js";
import { Player } from "../entities/Player";
import { IUpdateable } from "../IUpdateable";
import { Text } from "pixi.js";




export class MainLevel extends Container implements IUpdateable {

  player : Player

  playerStats : Text

  constructor() {
    super()


    this.player = new Player()

    this.player.playAnimation('idle')

    this.playerStats = new Text('hola', {
      fontSize: 24,
      fill: 0xffffff,
    })

    this.addChild(this.player)
    this.addChild(this.playerStats)
  }

  update(ticker: Ticker): void {
    this.player.update(ticker)
    this.playerStats.text = `player_velocity: ${this.player.x} `
  }
}


