import { Container, Ticker } from "pixi.js"
import { MainLevel } from './scenes/MainLevel';
import { IUpdateable } from "./IUpdateable";



export class Scene extends Container {

  mainLevel : MainLevel

  constructor() {
    super()

    
    
    this.mainLevel = new MainLevel()


    this.addChild(this.mainLevel)

    
    
    
    Ticker.shared.add(this.mainLevel.update, this.mainLevel)
  }
}

