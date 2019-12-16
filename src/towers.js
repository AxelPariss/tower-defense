
let towers = []

class Tower {
    constructor() {
        this.price = 0
        this.x = 0
        this.y = 0
        this.size = 20
        this.dammage = 1
        this.color = '#f00'
        this.radius = 50

        setInterval(() => {
            this.attack()
        }, 500);
    }
    attack() {
        for (let i = 0; i < enemies.length; i++) {
            let xDiff = Math.abs(this.x - enemies[i].x)
            let yDiff = Math.abs(this.y - enemies[i].y)
            if(xDiff < 50 && yDiff < 50){
                if(enemies[i].color == '#000'){
                    enemies[i].color = '#00f'
                } else {
                    enemies[i].color = '#000'
                }
                enemies[i].live -= this.dammage
            }
        }
    }
    draw() {
        ctx.fillStyle = this.color
        let x = this.x - this.size / 2
        let y = this.y - this.size / 2
        ctx.fillRect(x, y, this.size, this.size)
        ctx.stroke()
    }
}

class LittleTower extends Tower {
    constructor(x, y) {
        super()
        this.x = x - this.size / 2
        this.y = y - this.size / 2
        this.price = 10
        this.dammage = 1
        this.color = "red"
        this.radius = 70
    }
}

class MediumTower extends Tower {
    constructor(x, y) {
        super()
        this.x = x - this.size / 2
        this.y = y - this.size / 2
        this.price = 25
        this.dammage = 3
        this.color = "green"
        this.radius = 90
    }
}

class BigTower extends Tower {
    constructor(x, y) {
        super()
        this.x = x - this.size / 2
        this.y = y - this.size / 2
        this.price = 50
        this.dammage = 10
        this.color = "yellow"
        this.radius = 55
    }
}






const towersTypes = ['tower-little', 'tower-medium', 'tower-big']