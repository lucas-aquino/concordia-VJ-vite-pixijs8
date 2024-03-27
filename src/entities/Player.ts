import { AnimatedSprite, Container, Point, Spritesheet, Texture, Ticker } from "pixi.js";
import { RigidBody } from "../physics/RigidBody";
import { HEIGHT, WIDTH } from "../app";

export class Player extends RigidBody {

  atlasData : any

  animations : any


  constructor() {
    super()
    
    this.speed = new Point( 0, 0 )

    this.acceleration = new Point( 5, 6 )

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


    const spriteSheet = new Spritesheet(
      Texture.from('player_spritesheet'),
      this.atlasData
    );
    

    (async () => {
      await spriteSheet.parse()
    })()
    
    this.animations = {
      idle : new AnimatedSprite(spriteSheet.animations.idle),
      run : new AnimatedSprite(spriteSheet.animations.run),
      jump : new AnimatedSprite(spriteSheet.animations.jump),
      ataqueStart : new AnimatedSprite(spriteSheet.animations.ataqueStart),
      ataqueEnd : new AnimatedSprite(spriteSheet.animations.ataqueEnd),
      hit : new AnimatedSprite(spriteSheet.animations.hit),
    }
    
    for (let clave in this.animations) {
      this.animations[clave].autoUpdate = false
      this.animations[clave].scale = 5
    }
  }

  playAnimation(animation : string, speed : number = 0.07) {
    this.animations[animation].play()
    this.animations[animation].animationSpeed = speed
    this.addChild(this.animations[animation])
  }

  update(ticker : Ticker) {
    this.animations.idle.update(ticker)
    this.animations.run.update(ticker)
    this.animations.jump.update(ticker)
    this.animations.ataqueStart.update(ticker)
    this.animations.ataqueEnd.update(ticker)
    this.animations.hit.update(ticker)
    
    
    if(this.x > WIDTH){
      this.x = WIDTH
      this.acceleration.x = Math.abs(this.acceleration.x) * -1
    }else if(this.x < 0) {
      this.x = 0
      this.acceleration.x = Math.abs(this.acceleration.x)
    }
    
    
    if(this.y > HEIGHT){
      this.y = HEIGHT
      this.acceleration.y = Math.abs(this.acceleration.y) * -1
    }else if(this.y < 0) {
      this.y = 0
      this.acceleration.y = Math.abs(this.acceleration.y)
    }


    super.update(ticker)
  }
  
}



