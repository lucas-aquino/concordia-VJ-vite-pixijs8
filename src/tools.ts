



export function makeJsonAtlas() : string {

  let atlasData = `{ frames: {`

    

  const animNames = ['idle', 'run', 'jump', 'ataqueStart', 'ataqueEnd', 'hit']

  let y = 0 
  let x = 0

  for (let i = 0; i < 6; i++) {

    for (let j = 0; j < 8; j++) {

      atlasData += `
        ${animNames[i]}${j}: {
          frame: { x: ${x}, y: ${y}, w: 16, h: 16 },
          sourceSize: { w: 16, h: 16 },
          spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },`

      x += 16
    }
    x = 0
    y += 16
  }
  atlasData += '}}'
  
  return atlasData
}