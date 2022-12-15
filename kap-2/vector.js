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

    invert() {
        this.x = -this.x
        this.y = -this.y
    }

    invertX() {
        this.x = -this.x
    }

    invertY() {
        this.y = -this.y
    }

    draw(){
        ctx.beginPath()
        ctx.moveTo(canvas.width / 2, canvas.height / 2)
        ctx.lineTo(canvas.width / 2 + this.x * 1000, canvas.height / 2 + this.y * 1000)
        ctx.stroke()
    }
}