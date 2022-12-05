const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let keys = []

class PVector {
    constructor(x, y){
        this.x = x
        this.y = y
        this.d
        this.m
    }

    add(vector){
        this.y += vector.y
        this.x += vector.x
    }

    sub(vector){
        this.y -= vector.y
        this.x -= vector.x
    }

    mult(n){
        this.y *= n
        this.x *= n
    }

    div(n){
        this.y /= n
        this.x /= n
    }

    mag(){
        this.d = Math.sqrt(this.x * this.x + this.y * this.y)

        return this.d
    }

    norm(){
        this.m = this.mag()

        if (this.m != 0) {
            this.div(this.m)
        }
    }

    limit(num) {

        if (this.mag() > num) {
            this.norm()
            this.mult(num)
        }

    }

    draw(){
        ctx.beginPath()
        ctx.moveTo(canvas.width / 2, canvas.height / 2)
        ctx.lineTo(canvas.width / 2 + this.x * 10, canvas.height / 2 + this.y * 10)
        ctx.stroke()
    }
}

class Mover {
    constructor(x, y, xAcc, yAcc, maxSpeed, col) {
        this.locVec = new PVector(x, y)
        this.velVec = new PVector(0, 0)
        this.accVec = new PVector(0, 0)
        this.dir = new PVector(0, 0)
        this.maxSpeed = maxSpeed
        this.dx
        this.dy
        this.colNum = col
        this.col
    }

    update() {
        /*
        if (keys[87]) {
            this.accVec.y -= 0.01
        } else if (!keys[83]) {
            this.accVec.y = 0
        }

        if (keys[83]) {
            this.accVec.y += 0.01
        } else if (!keys[87]) {
            this.accVec.y = 0
        }
        */

        if (mouse &&
            run) {

            this.dx = mouse.x - this.locVec.x
            this.dy = mouse.y - this.locVec.y
            
            this.dir = new PVector(this.dx, this.dy)
            this.dir.norm()
            this.dir.mult(1)
            this.accVec = this.dir
            count++
            if (count == movers.length){
               run = false 
            }
        }

        
        this.velVec.add(this.accVec)
        this.velVec.mult(0.96)
        this.velVec.limit(this.maxSpeed)

        
        this.locVec.add(this.velVec)
        
    }

    edgeCheck() {
        if (this.locVec.x > canvas.width - 20 || this.locVec.x < 0) {
        this.velVec.x = -this.velVec.x
        this.accVec.x = -this.accVec.x
        }
        
        if (this.locVec.y > canvas.height - 20 || this.locVec.y < 0) {
            this.velVec.y = -this.velVec.y        
            this.accVec.y = -this.accVec.y        
        }
    }

    draw() {

        switch (this.colNum) {
            case 0: this.col = 'red'
                break
            case 1: this.col = 'blue'
                break
            case 2: this.col = 'yellow'
                break
            case 3: this.col = 'purple'
                break
            case 4: this.col = 'green'
                break
            case 5: this.col = 'cyan'
                break
            case 6: this.col = 'lightgreen'
                break
            case 7: this.col = 'orange'
                break
        }
        
        this.velVec.draw()

        ctx.fillStyle = this.col
        ctx.strokeStyle = this.col
        ctx.fillRect(this.locVec.x, this.locVec.y, 20, 20)
    }
}

let movers = []

for (let i = 0; i < 8; i++) {
    movers.push(new Mover(100 * i + 35, 100, random(0.01, 0.03), random(0.01, 0.03), 3, i))
}

let mouse
let count = 0
let run = true


function main() {
    ctx.globalAlpha = 0.15
    ctx.fillStyle = 'silver'
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height)
    ctx.globalAlpha = 1

    movers.forEach(e => e.update())
    movers.forEach(e => e.edgeCheck())
    movers.forEach(e => e.draw())

    requestAnimationFrame(main)
}

main()

function random(min, max) {
    let r = Math.random() * (max - min) + min 

    return r
}

document.addEventListener('keydown', e => {
    keys[e.keyCode] = true
})

document.addEventListener('keyup', e => {
    keys[e.keyCode] = false
})

document.addEventListener('click', e => {
    mouse = new PVector(getCursorPosition(canvas, e)[0], getCursorPosition(canvas, e)[1])
    count = 0
    run = true
})