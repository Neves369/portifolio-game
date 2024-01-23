const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.screen.width
canvas.height = window.screen.height;

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i))
}

const charactersMap = []
for (let i = 0; i < charactersMapData.length; i += 70) {
  charactersMap.push(charactersMapData.slice(i, 70 + i))
}

const boundaries = []
const offset = {
  x: -435,
  y: -620
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const characters = []
const villagerImg = new Image()
villagerImg.src = './img/villager/Idle.png'

const oldManImg = new Image()
oldManImg.src = './img/oldMan/Idle.png'

const monkImg = new Image()
monkImg.src = './img/monk/Idle.png'

const oldWomanImg = new Image()
oldWomanImg.src = './img/oldWoman/Idle.png'

const samuraiImg = new Image()
samuraiImg.src = './img/samurai/Idle.png'

const blueSamuraiImg = new Image()
blueSamuraiImg.src = './img/blueSamurai/Idle.png'

const frogImg = new Image()
frogImg.src = './img/frog/Idle.png'

const boyImg = new Image()
boyImg.src = './img/boy/Idle.png'

const masterImg = new Image()
masterImg.src = './img/master/Idle.png'

charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: ['...', 'O que dizer do meu criador?', 'Ele é um cara muito legal, além de ser um desenvolvedor incrível!', 'Vá até o porto e você encontrará alguns projetos em que ele trabalhou...']
        })
      )
    }
    // 1031 === oldMan
    else if (symbol === 1031) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: oldManImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: ['Eu ainda não sei o que vou dizer']
        })
      )
    }
    // 1032 === monk
    else if (symbol === 1032) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: monkImg,
          frames: {
            max: 4,
            hold: 100
          },
          animate: true,
          scale: 3,
          dialogue: ['Não tenho diálogo para mostrar ainda']
        })
      )
    }
    // 1033 === oldWoman
    else if (symbol === 1033) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: oldWomanImg,
          frames: {
            max: 4,
            hold: 100
          },
          animate: true,
          scale: 3,
          dialogue: ["Salve Richard...", "O que você está achando?"]
        })
      )
    }
    // 1034 === samurai
    else if (symbol === 1034) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: samuraiImg,
          frames: {
            max: 4,
            hold: 100
          },
          animate: true,
          scale: 3,
          dialogue: ['Cara, não tem diálogo ainda...', 'para de ser teimoso!']
        })
      )
    }
    // 1035 === blue samurai
    else if (symbol === 1035) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: blueSamuraiImg,
          frames: {
            max: 4,
            hold: 100
          },
          animate: true,
          scale: 3,
          dialogue: ['A vingança nunca é plena...', 'mata a alma e envenena']
        })
      )
    }
    // 1036 === frog
    else if (symbol === 1036) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: frogImg,
          frames: {
            max: 3,
            hold: 100
          },
          animate: true,
          scale: 3,
          dialogue: ['vim do Monte Myōboku']
        })
      )
    }
    // 1037 === boy
    else if (symbol === 1037) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: boyImg,
          frames: {
            max: 3,
            hold: 100
          },
          scale: 3,
          dialogue: ['vim do Monte Myōboku']
        })
      )
    }
    else if (symbol === 1038) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: boyImg,
          frames: {
            max: 3,
            hold: 100
          },
          scale: 3,
          dialogue: ['vim do Monte Myōboku']
        })
      )
    }
    else if (symbol === 1039) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: boyImg,
          frames: {
            max: 3,
            hold: 100
          },
          scale: 3,
          dialogue: ['vim do Monte Myōboku']
        })
      )
    }
    // 1040 === master
    else if (symbol === 1040) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: masterImg,
          frames: {
            max: 4,
            hold: 100
          },
          scale: 3,
          dialogue: ['Bem-vindo ao tour pelos projetos do Douglas...','Entre no barco, já vamos partir']
        })
      )
    }
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

const image = new Image()
image.src = './img/Pellet Town.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage
  }
})

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: image
})

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: foregroundImage
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

const movables = [
  background,
  ...boundaries,
  foreground,
  ...characters
]
const renderables = [
  background,
  ...boundaries,
  ...characters,
  player,
  foreground
]

const battle = {
  initiated: false
}

function animate() {
  window.requestAnimationFrame(animate)
  renderables.forEach((renderable) => {
    renderable.draw()
  })

  let moving = true
  player.animate = false

  if (keys.w.pressed && lastKey === 'w'){
    player.animate = true
    player.image = player.sprites.up

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 3
      })
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true
    player.image = player.sprites.left

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 3
      })
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true
    player.image = player.sprites.down

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 3
      })
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true
    player.image = player.sprites.right

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 3
      })
  }
}

let lastKey = ''
window.addEventListener('keydown', (e) => {
  if (player.isInteracting) {
    switch (e.key) {
      case ' ':
        player.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue } = player.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector('#characterDialogueBox').innerHTML =
            player.interactionAsset.dialogue[dialogueIndex]
          return
        }

        // finish conversation
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        break
    }
    return
  }

  switch (e.key) {
    case ' ':
      if (!player.interactionAsset) return

      // beginning the conversation
      const firstMessage = player.interactionAsset.dialogue[0]
      document.querySelector('#characterDialogueBox').innerHTML = firstMessage
      document.querySelector('#characterDialogueBox').style.display = 'flex'
      player.isInteracting = true
      break
    case 'w' || 'ArrowUp':
      keys.w.pressed = true
      lastKey = 'w'
      break
    
    case 'ArrowUp':
      keys.w.pressed = true
      lastKey = 'w'
      break  

    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break

    case 'ArrowLeft':
      keys.a.pressed = true
      lastKey = 'a'
      break  

    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break

    case 'ArrowDown':
      keys.s.pressed = true
      lastKey = 's'
      break  

    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
    
    case 'ArrowRight':
      keys.d.pressed = true
      lastKey = 'd'
      break    
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case "ArrowUp":
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case "ArrowLeft":
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case "ArrowDown":
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
    case "ArrowRight":
      keys.d.pressed = false
      break
  }
})


