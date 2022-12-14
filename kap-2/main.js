const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let mouseIsDown = false
let idTimeout

let mover = new Mover(10, 10, 20, 3, 0.1)
let wind = new PVector(0.01, 0)

let fps = 1

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (mouseIsDown) {
         mover.applyForce(wind)
    }
    
    if (mover.locVec.y > canvas.height - 20) {
        mover.locVec.y = canvas.height - 20
        mover.velVec.invertY()
        mover.velVec.mult(0.9)
    }

    if (mover.locVec.x > canvas.width - 20) {
        mover.locVec = new PVector(10, 10)
        mover.velVec.y = 0
    }

    mover.update()
    mover.draw()

    idTimeout = setTimeout(function() {
        
    }, 1000 / fps)
    
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