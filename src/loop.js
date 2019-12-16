let canvas = document.getElementById("canvas")
canvas.width = 400 //window.innerWidth
canvas.height = 400 //window.innerHeight
let ctx = canvas.getContext("2d")

let reward = 10
let unit = 20
let baseSpeed = 0.06
let money = 50
let lives = 10

let map = document.getElementById("map");
let enemy1 = document.getElementById("enemy-1");



let towerTypeSelected = 'little'



function loop() {
    ctx.beginPath()
    checkEnemiesLive()
    checkEnemiesSucceed()
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    displayMap()

    for (let i = 0; i < enemies.length; i++) {
        enemies[i].move()        
        enemies[i].draw()
    }
    for (let i = 0; i < towers.length; i++) {
        towers[i].draw()
    }

    drawMouseCircle(mouseX, mouseY)

}



// Create enemies
setInterval(() => {
    enemies.push(new Enemy())
}, 1000)

// Main loop
window.onload = function () {
    setInterval(() => {
        loop()
    }, 1000/60)


    initGame()

    let towerButtons = document.querySelectorAll('.btn-tower')
    towerButtons.forEach((towerButton) => {
        towerButton.addEventListener('click', () => {
            console.log(towerButton)
            towerTypeSelected = towerButton.dataset.value
        })
    })

};