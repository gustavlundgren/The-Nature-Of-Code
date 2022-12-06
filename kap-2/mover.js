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
        this.mass = 10
        this.f = new PVector(0, 0)
    }

    update() {
        this.velVec.add(this.accVec)
        this.velVec.mult(0.96)
        this.velVec.limit(this.maxSpeed)

        
        this.locVec.add(this.velVec)

        this.accVec.mult(0)
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

    
    applyForce(forceVec){
        this.f.add(forceVec)  
        this.f.div(this.mass)
        this.accVec.add(this.f)
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