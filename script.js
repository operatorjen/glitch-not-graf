const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.width = canvas.width = window.innerWidth
ctx.height = canvas.height = window.innerHeight

let x = ctx.width / 2
let y = ctx.height / 2
let switchX = false
let switchY = false
let switchCount = false
let count = 0

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
 //  ctx.beginPath()
  ctx.fillStyle = `rgba(${Math.random() * 20}, 190, 210, 0.6)`
  ctx.strokeStyle = 'rgba(1, 1, 1, 0.3)'
  //ctx.closePath()

/*  
  if (count % 100 === 0) {
    if (switchX) {
      x -= Math.sin(x + Math.random()) * 19
    } else {
      x += Math.cos(x + Math.random()) * 19
    }

    if (switchY) {
      y -= Math.cos(y + Math.random()) * 19
    } else {
      y += Math.sin(y + Math.random()) * 19
    }
  }
  */
    if (count < 0 || count > 210) {
      //switchCount = !switchCount
      x = ctx.width / 2
      y = ctx.height / 2
    }
  
    if (switchCount) {
      count--  
    } else {
      count++  
    }
  
    x = x + Math.sin(count * Math.random()) * 10
    y = y + Math.cos(count * Math.random()) * 10
  
 /* 
  if (x < 0 || x > ctx.width) {
    switchX = !switchX  
  }
  
  if (y < 0 || y > ctx.height) {
    switchY = !switchY 
  }
  */
  ctx.lineTo(x, y, x * Math.random() + x * 10, y * Math.random() + y * 10)
  ctx.fill()
  ctx.stroke()
  window.requestAnimationFrame(render)
}

render()