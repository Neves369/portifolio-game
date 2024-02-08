const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.screen.width;
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

const pointImg = new Image()
pointImg.src = './img/point/Idle.png'

const letterImg = new Image()
letterImg.src = './img/point/Letter.png'

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
          dialogue: [
            '...',
            'Sabia que estamos em uma simulação criada pelo Douglas?',
            'O quê? Você não sabe quem é Douglas?', 
            'O que dizer do meu criador?', 
            'Ele é um cara muito legal, além de ser um desenvolvedor incrível!',
            'Na casa mais ao leste da ilha mora um mago, talvez o Grande Mago o ajude a obter mais informações sobre o Douglas...', 
            'Interaja com o bastão na frente da casa para chamar o mago. ',
            'Ah, e dizem que se você pegar o barco do porto poderá visitar os projetos em que ele trabalhou, embora nunca vi ninguém que partiu para além dessas terras retornar...'
          ]
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
          dialogue: [
            'Ah, desculpe...',
            'não te vi ai, estava distraído lendo um livro no \"Litterae\"',
            'o quê? O nome do livro? A Divina Comédia, de Dante Alighieri...',
            'Mas voltando ao \"Litterae\", super recomendo esse app, o controle de cache é bem elaborado...',
            'e utiliza pacotes de módulo nativo jutamente com a comodidade do Expo, se você gosta de desenvolvimento de aplicativos deveria dar uma olhada...',
            'peça ao capitão do porto que lhe mostre o \"Litterae\".'
          ]
        })
      )
    }
    // 1032 === monk
    else if (symbol === 1032) {
      console.log("O monge: ", symbol, "está em: ", " x: ", j, " y: ", i)
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
          dialogue: [
            '(Irritado) Interrompendo meu treinamento, hein? Não percebe que estou em profunda meditação?',
            'O respeito pelos outros é parte fundamental do caminho...',
            '(Suspira) Muito bem, já que está aqui, vou abrir uma exceção. Escute com atenção e não ouse me interromper novamente. O treinamento é uma jornada solitária, e a paciência é a chave para alcançar a iluminação...',
            'Você já perdeu tempo suficiente aqui. Siga para o porto, lá encontrará o próximo passo de sua jornada. Agora me deixe voltar à minha meditação.'
          ]
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
          dialogue: [
            "Aquele velho caduco acha que estamos em uma simulação...", 
            "Não é cômico? hahahaha",
            "Ah esqueça ele e me diga. O que o trás por essas terras?",
            "Bem, não importa...",
            "Já ouviu falar do Divine Speakers?",
            "O Divine Speakers é um app desenvolvido em React Native voltado ao estudo de teologia...",
            "Lá você encontra diversos documentos excelentes para apoiar seus estudos...",
            "Mas o que me chama atenção mesmo são as tecnologias empregadas no app...",
            "Bem, eu não entendo muito disso, mas meu neto disse que o app possui integração com o Firebase além de contar com diversas técnicas e tecnologias de controle de memória...",
            "Evitando assim chamadas desnecessárias ao servidor e disponibilizando os conteúdos offline sem consumir muita memória...",
            "Talvez no porto você encontre mais informações sobre o app."
          ]
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
          dialogue: ['Acerte primeiro!', 'Bata com força!', 'Sem misericórdia!']
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
          dialogue: [
            '...',
            'Ichi,roku, kiaaai!',
            'aqui em nossa escola adotamos a filosofia Kaizen...',
            'hoje melhor que ontem e pior do que amanhã... ',
            'como disse o mestre Lee, \"Eu não tenho medo do homem que praticou 10.000 chutes diferentes, mas sim do homem que praticou o mesmo chute 10.000 vezes.\"...',
            'constância é o segredo para o suceso, tentar, tentar e tentar até dar certo!'
          ]
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
            hold: 50
          },
          animate: true,
          scale: 3,
          dialogue: [
            'Sou o grande sapo eremita do Monte Myōboku...',
            'por milenios sou o detentor de toda a sabedoria terrena, sou mais velho que os oceânos que circundam essa ilha...',
            'eu contemplei o surgimento e a queda de eras, reis, governos e ideais...',
            'por isso me propus a buscar o que não pode ser tirado de mim, o conhecimento!',
            'Estou catalogando espécimes nunca vistas pela humanidade, exemplares raros que só aparecem nesta ilha...',
            'assim que eu obtiver um pouco do genoma dessas espécimes usarei o \"Comparador de Genomas\" para comparar o genoma delas com outras espécies já conhecidas...',
            'se vocÊ também gosta de biologia recomendo adquirir um \"Comparador de Genomas\" no porto.'
          ]
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
          dialogue: ['Deixe-me jogar meu \"Campo Minado\" em paz!']
        })
      )
    }
    // 1038 === boy
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
          dialogue: [
            'Você parece uma pessoa legal!',
            'Então, vou te contar meu segredo...',
            'sou um grande hacker! Faço parte do grupo Antônimos, você já deve ter ouvido falar...',
            'Uma ferramente muito útil que eu costumo usar é o \"Port-scan\", ele garante que inicialmente eu tenha as informaçõers necessárias para encontrar possíveis vunerabilidades e penetrar na rede.',
            'O capitão do navio me passou um template de um projeto de \"Web-scraping\" que também foi muito útil, sempre que preciso trabalhar com raspagem de dados da WEB eu costumo consultar esse projeto...',
            'Agora vá, e não diga a ninguém que eu lhe contei essas coisas!'
          ]
        })
      )
    }
    // 1039 === boy
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
          dialogue: [
            'O Esperancinha é um dos bares mais tradicionais da cidade de Teresópolis...', 
            'Eles tem um app de clube de pontos incrível!', 
            'Dizem que foi o Douglas quem desenvolveu enquanto trabalhava para ZTI Tecnologia...',
            'Lá no porto, entre os últimos destinos você poderá ver o link para a página do app na Google Playstore...',
            'Clique em \"Clube Esperancinha - Cliente\" para acessar a página do app.'
          ]
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
          dialogue: ['Bem-vindo ao tour pelos projetos do Douglas...','Entre no barco, já vamos partir!']
        })
      )
    }
    // 1041 === point
    else if (symbol === 1041) {
      characters.push(
        new Thing({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: pointImg,
          frames: {
            max: 4,
            hold: 100
          },
          scale: 3,
          dialogue: ['(Embarcando)']
        })
      )
    }

     // 1042 === scroll
     else if (symbol === 1042) {
      characters.push(
        new Thing({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: letterImg,
          frames: {
            max: 1,
            hold: 100
          },
          scale: 3,
          dialogue: [
            '(fores aperire)', 
            'Bem-vindo!', 
            'vou lhe contar tudo sobre o Douglas...',
            'Como eu sei que você quer saber sobre o Douglas?',
            'Eu fui programado para isso hahaha...',
            'Vou lhe entregar um pergaminho com o conhecimento oculto sobre ele...',
            'Depois abrirei um portal para as terras do GitHub, caso você precise de mais informações sobre ele...',
            'liber, appare!'
          ]
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
    x: 20 * Boundary.width + offset.x,
    y: 20 * Boundary.height + offset.y
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
        
        if(dialogue == '(Embarcando)'){
          openNavigate()
        }
        
        else if (dialogueIndex <= dialogue.length - 1) {

         

          document.querySelector('#characterDialogueBox').innerHTML =
            player.interactionAsset.dialogue[dialogueIndex]
          return
        }
        
        // finish conversation
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        if(dialogue[7] == 'liber, appare!'){
          openPortal()
        }

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

window.addEventListener('click', (e) => {
    audio.Click.play()
})

document.getElementById('portal-link').addEventListener('click', (e) => {
  audio.Teleport.play()
})

function openNavigate() {
  document.getElementById('navigateModal').style.display = 'block';
  document.body.classList.add('modal-open');
  document.querySelector('.modal-overlay').style.display = 'block';
}

function openPortal() {
  audio.Map.stop()
  audio.Portal.stop()
  audio.Portal.play()
  document.getElementById('portalModal').style.display = 'block';
  document.body.classList.add('modal-open');
  document.querySelector('.modal-overlay').style.display = 'block';
  document.getElementById('modal-ficha').scrollTop = 0;
}


