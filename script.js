const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.width = canvas.width = 500
ctx.height = canvas.height = 500

let x = ctx.width / 2
let y = ctx.height / 2
let switchX = false
let switchY = false

function render() {
  ctx.clearRect(0, 0, ctx.width, ctx.height)
  ctx.strokeStyle = 'rgba(10, 210, 100)'
  x += Math.sin(x + Math.random() * 2) * Math.random() * 9
  y += Math.cos(y + Math.random() * 2) * Math.random() * 9
  
  if (x > 
  ctx.arc(x, y, 1, 0, 2 * Math.PI)
  ctx.stroke()
  window.requestAnimationFrame(render)
}

render()