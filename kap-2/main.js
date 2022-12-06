const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let mouseIsDown = false
let idTimeout

let mover = new Mover(100, 100, random(0.01, 0.03), random(0.01, 0.03), 3, 3)
let wind = new PVector(0.5, 0)
let gravity = new PVector(0, 9.82)

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (mouseIsDown) {
        mover.applyForce(wind)
    }
        

    mover.update()
    mover.edgeCheck()
    mover.draw()
    requestAnimationFrame(main)
}

main()

function random(min, max) {
    let r = Math.random() * (max - min) + min 

    return r
}

window.addEventListener('mousedown', function() {
  mouseIsDown = true
  idTimeout = setTimeout(function() {
    if(mouseIsDown) {
      // mouse was held down for > 2 seconds
    }
  }, 2000)
})

window.addEventListener('mouseup', function() {
  clearTimeout(idTimeout)
  mouseIsDown = false
})