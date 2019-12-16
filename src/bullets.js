let bullets = []

class Enemy {
    constructor() {
        this.image = enemy1
        this.direction = 'right'
        this.size = 50
        this.x = 20
        this.y = 68
        this.speed = 20
        this.live = 10
        this.color = '#000'
    }
    move() {
        if(this.x < 325 && this.y < 100){
            this.direction = 'right'
            this.x = this.x + this.speed * baseSpeed
        } else if (this.y < 200 && this.x > 300){
            this.direction = 'bottom'
            this.y = this.y + this.speed * baseSpeed
        } else if (this.x > 74 && this.y < 250) {
            this.direction = 'left'
            this.x = this.x - this.speed * baseSpeed
        } else if (this.x < 100 && this.y < 335) {
            this.direction = 'bottom'
            this.y = this.y + this.speed * baseSpeed
        } else {
            this.direction = 'right'
            this.x = this.x + this.speed * baseSpeed
        }
    }
    draw() {
        //ctx.fillStyle = this.color
        let x = this.x - this.size / 2
        let y = this.y - this.size / 2
        //ctx.fillRect(x, y, this.size, this.size)
        
        ctx.drawImage(this.image, 0, 0, 128, 128, x, y, this.size, this.size);
        // Text
        /*
        ctx.fillStyle = '#fff'
        ctx.font = "14px Arial";
        ctx.fillText(this.live, x + 6, y + 15);
        ctx.stroke()
        */
    }
}