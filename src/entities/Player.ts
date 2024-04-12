import { AnimatedSprite, Graphics, Point, Rectangle, Spritesheet, Texture, Ticker } from "pixi.js";
import { RigidBody } from "../physics/RigidBody";
import { Keyboard } from "../events/Keyboard";
import { BoxCollider } from "../physics/BoxCollider";
import { GRAVITY } from "../physics/physics";


export enum PlayerAnimations {
  idle = 'idle',
  run = 'run',
  jump = 'jump',
  ataqueStart = 'ataqueStart',
  ataqueEnd = 'ataqueEnd',
  hit = 'hit'   
}

export class Player extends RigidBody{

  atlasData : any

  animations : any
  
  currentAnimation : AnimatedSprite

  speed : number = 5

  jumpForce : number = 1.5

  canJump : boolean = false

  collider : BoxCollider

  constructor() {
    super(0.5)

    this.atlasData = { 
      frames: {
        idle0: {
          frame: { x: 0, y: 0, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        idle1: {
          frame: { x: 16, y: 0, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        idle2: {
          frame: { x: 32, y: 0, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        idle3: {
          frame: { x: 48, y: 0, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        
        run0: {
          frame: { x: 0, y: 16, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        run1: {
          frame: { x: 16, y: 16, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        run2: {
          frame: { x: 32, y: 16, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        run3: {
          frame: { x: 48, y: 16, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        run4: {
          frame: { x: 64, y: 16, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        run5: {
          frame: { x: 80, y: 16, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        run6: {
          frame: { x: 96, y: 16, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        run7: {
          frame: { x: 112, y: 16, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        
        jump0: {
          frame: { x: 0, y: 32, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        jump1: {
          frame: { x: 16, y: 32, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        jump2: {
          frame: { x: 32, y: 32, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        jump3: {
          frame: { x: 48, y: 32, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        jump4: {
          frame: { x: 64, y: 32, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        jump5: {
          frame: { x: 80, y: 32, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        
        ataqueStart0: {
          frame: { x: 0, y: 48, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ataqueStart1: {
          frame: { x: 16, y: 48, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ataqueStart2: {
          frame: { x: 32, y: 48, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ataqueStart3: {
          frame: { x: 48, y: 48, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        
        ataqueEnd0: {
          frame: { x: 0, y: 64, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ataqueEnd1: {
          frame: { x: 16, y: 64, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ataqueEnd2: {
          frame: { x: 32, y: 64, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ataqueEnd3: {
          frame: { x: 48, y: 64, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        
        hit0: {
          frame: { x: 0, y: 80, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        hit1: {
          frame: { x: 16, y: 80, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        hit2: {
          frame: { x: 32, y: 80, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        hit3: {
          frame: { x: 48, y: 80, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        }
      },
      meta: {
        image: '/static/player/player.png',
        format: 'RGBA8888',
        size: { w: 128, h: 96 },
        scale: 1
      },
      animations: {
        idle: [ 'idle0', 'idle1', 'idle2', 'idle3' ],
        run: [ 'run0', 'run1', 'run2', 'run3', 'run4', 'run5', 'run6', 'run7' ],
        jump: [ 'jump0', 'jump1', 'jump2', 'jump3', 'jump4', 'jump5' ],
        ataqueStart: [ 'ataqueStart0', 'ataqueStart1', 'ataqueStart2', 'ataqueStart3' ],
        ataqueEnd: [ 'ataqueEnd0', 'ataqueEnd1', 'ataqueEnd2', 'ataqueEnd3' ],
        hit: [ 'hit0', 'hit1', 'hit2', 'hit3' ]
      }
    } 

    this.interactive = true

    const player_texture = Texture.from('player_spritesheet')

    player_texture.source.scaleMode = 'nearest'

    const spriteSheet = new Spritesheet(
      player_texture,
      this.atlasData
    )

    ;(async () => {
      await spriteSheet.parse()
    })();
    
    this.animations = {
      idle : new AnimatedSprite(spriteSheet.animations.idle),
      run : new AnimatedSprite(spriteSheet.animations.run),
      jump : new AnimatedSprite(spriteSheet.animations.jump),
      ataqueStart : new AnimatedSprite(spriteSheet.animations.ataqueStart),
      ataqueEnd : new AnimatedSprite(spriteSheet.animations.ataqueEnd),
      hit : new AnimatedSprite(spriteSheet.animations.hit),
    }
    
    this.gravity = true

    for (let clave in this.animations) {
      this.animations[clave].autoUpdate = false
      this.animations[clave].anchor.x = 0.5
      this.animations[clave].anchor.y = 0.5
      this.animations[clave].scale = 4
    }

    this.currentAnimation = this.animations.idle
    

    // WIDTH: 9, HEIGHT: 12
    this.collider = new BoxCollider({
      width: 9 * 4,
      height: 12 * 4,
      color: 0xFF0000, 
      debug: true
    })
    
    this.collider.y = -4 * 4
    this.collider.x = -5 * 4

    const pivotGraph = new Graphics()
      .ellipse(0,0,1,1)
      .fill({
        color: 0x00ffff, 
        alpha: 1,
    })
    
    this.addChild(this.currentAnimation)
    this.addChild(this.collider)
    this.addChild(pivotGraph)
  }

  playAnimation(animation : PlayerAnimations, speed : number = 0.07) {
    this.currentAnimation = this.animations[animation]
    this.currentAnimation.animationSpeed = speed
    this.currentAnimation.play()
  }

  override update(ticker : Ticker) {
    this.currentAnimation.update(ticker)

    this.movent(ticker)

    super.update(ticker)
  }
  
  movent({ deltaTime }:  Ticker) : void {
    if(Keyboard.state.get('KeyA')) {
      this.addForce(-this.speed, 0)
    }

    if(Keyboard.state.get('KeyD')) {
      this.addForce(this.speed, 0)
    }

    if(Keyboard.state.get('Space') && this.canJump) {
      this.addForce(0, -(this.jumpForce * GRAVITY))
      this.canJump = false
    }
  }
}



