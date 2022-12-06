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