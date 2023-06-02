import './style.css'
import animationStates from './states'

let playerState = 'idle'
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', (e) => {
  playerState = e.target.value
})

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const canvasWidth = canvas.width = 575
const canvasHeight = canvas.height = 523

const playerImage = new Image
playerImage.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png'
const spriteWidth = 6876
const spriteHeight = 5230

let gameFrame = 0
const staggerFrames = 5
const spriteAnimations = []

animationStates.forEach((state, i) => {
  let frames = {
    loc: []
  }
  for (let j = 0; j < state.frames; j++) {
    let x = j * canvasWidth
    let y = i * canvasHeight
    frames.loc.push({x, y})
  }
  spriteAnimations[state.name] = frames
})

const animate = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length
  let frameX = canvasWidth * -position
  let frameY = -spriteAnimations[playerState].loc[position].y
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight)

  // if (gameFrame % staggerFrames === 0) {
  //   if (frameX < 4 ) frameX++
  //   else frameX = 0
  // }

  gameFrame++
  requestAnimationFrame(animate)

}

animate()