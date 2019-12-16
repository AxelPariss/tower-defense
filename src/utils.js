
function drawMouseCircle(mouseX, mouseY) {
    if (mouseDisplayed === true) {
        let radius = 50
        ctx.beginPath();

        switch (towerTypeSelected) {
            case 'little':
                radius = new LittleTower().radius
                ctx.fillStyle = "rgba(123, 213, 172, 0.5)";
                break
            case 'medium':
                radius = new MediumTower().radius
                ctx.fillStyle = "rgba(123, 176, 21, 0.5)";
                break
            case 'big': 
                radius = new BigTower().radius
                ctx.fillStyle = "rgba(123, 75, 132, 0.5)";
                break
        }

        centerX = mouseX
        centerY = mouseY
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
    }
}


function checkEnemiesLive() {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].live <= 0) {
            money += reward
            displayMoney()
            enemies.splice(i, 1);
        }
    }
}

function checkEnemiesSucceed() {
    // A enlever
    return true
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].y > 200) {
            lives--
            displayLives()
            checkLose()
            enemies.splice(i, 1);
        }
    }
}

function displayLives(){
    let livesHTML = document.getElementById('lives')
    livesHTML.innerHTML = lives
}

function displayMoney() {
    let moneyHTML = document.getElementById('money')
    moneyHTML.innerHTML = money
}
function checkLose() {
    if(lives <= 0){
        console.log('Vous avez perdu :/')
    }
}

function initGame() {
    displayMoney()
    displayLives()
}

function addTower(x, y) {
    let newTower
    switch (towerTypeSelected) {
        case 'little':
            newTower = new LittleTower(x, y)
            if (money >= newTower.price){
                // Add a new Tower
                towers.push(newTower)

                // Update money
                money -= newTower.price
                displayMoney()
            }
            break
        case 'medium':
            newTower = new MediumTower(x, y)
            if (money >= newTower.price) {
                // Add a new Tower
                towers.push(newTower)

                // Update money
                money -= newTower.price
                displayMoney()
            }
            break
        case 'big':
            newTower = new BigTower(x, y)
            if (money >= newTower.price) {
                // Add a new Tower
                towers.push(newTower)

                // Update money
                money -= newTower.price
                displayMoney()
            }
            break
        default:
            newTower = new LittleTower(x, y)
            if (money >= newTower.price) {
                // Add a new Tower
                towers.push(newTower)

                // Update money
                money -= newTower.price
                displayMoney()
            }
            break
    }
}


function displayMap(){
   ctx.drawImage(map, 0, 0, 1408, 1535, 0, 0, canvas.clientWidth, canvas.height);
}