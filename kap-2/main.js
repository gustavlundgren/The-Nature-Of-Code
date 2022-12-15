const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let mouseIsDown = false
let idTimeout

let mover = new Mover(0, 0, 20, 3, 1)
let wind = new PVector(10 / 100, 0)
wind.div(mover.mass)

let gravity = new PVector(0, 9.82 / 100)
gravity.mult(mover.mass)

let norm = new PVector(0,0)
norm.sub(gravity)

let mu = 0.1


let tempForce = new PVector(0, 0)

let fps = 1

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (mouseIsDown) {
         mover.applyForce(wind)
    }

    console.log("loc ", mover.locVec.x);
    console.log("vel ", mover.velVec.x);
    console.log("acc ", mover.accVec.x);

    mover.edgeCheck(norm)
    mover.applyForce(gravity)
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
})

window.addEventListener('mouseup', function() {
  clearTimeout(idTimeout)
  mouseIsDown = false
})