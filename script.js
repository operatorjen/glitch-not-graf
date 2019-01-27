const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.width = canvas.width = 500
ctx.height = canvas.height = 500

let x = ctx.width / 2
let y = ctx.height / 2
let switchX = false
let switchY = false
let count = 0

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = 'rgba(10, 110, 200, 0.1)'
  count++
  
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
    x = x + Math.sin(count) * 2
    y = y + Math.cos(count) * 2
  
 /* 
  if (x < 0 || x > ctx.width) {
    switchX = !switchX  
  }
  
  if (y < 0 || y > ctx.height) {
    switchY = !switchY 
  }
  */
  ctx.arc(x, y, 10, 0, 2 * Math.PI)
  ctx.stroke()
  window.requestAnimationFrame(render)
}

render()