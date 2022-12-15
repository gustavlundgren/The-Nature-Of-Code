class Mover {
    constructor(x, y, maxSpeed, col, mass) {
        this.locVec = new PVector(x, y)
        this.velVec = new PVector(0, 0)
        this.accVec = new PVector(0, 0)
        this.dir = new PVector(0, 0)
        this.maxSpeed = maxSpeed
        this.dx
        this.dy
        this.colNum = col
        this.col
        this.mass = mass
        this.f = new PVector(0, 0)
        this.tempF = new PVector(0, 0)
        this.dir = new PVector(0, 0)
    }

    update() {
        this.velVec.add(this.accVec)
        this.locVec.add(this.velVec)

        this.dir.x = this.velVec.x
        this.dir.norm()

        // console.log(this.accVec.y);

        this.accVec.mult(0)
        this.accVec.add(this.f) 
        this.f.mult(0)

    }
    
    applyForce(forceVec){
        this.tempF.add(forceVec)
        this.tempF.div(this.mass)
        this.f.add(this.tempF)
        this.tempF.mult(0)  
    }

    edgeCheck(normalForce, friction) {
        if (this.locVec.y + this.accVec.y > canvas.height - 100 * this.mass) {
            
            this.tempF.sub(this.velVec)
            this.tempF.div(10)
            // console.log(this.tempF);

            this.applyForce(this.tempF)
            this.applyForce(normalForce)
            this.tempF.mult(0)
            this.velVec.y = 0
            
            if (this.velVec.x != 0) {
                friction.mult(-this.dir.x)
                this.applyForce(friction)
            }
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
        ctx.fillRect(this.locVec.x, this.locVec.y, this.mass * 100, this.mass * 100)
    }
}