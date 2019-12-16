
let mouseX = 0
let mouseY = 0
let mouseDisplayed = false
canvas.addEventListener("mousemove", (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
    drawMouseCircle(mouseX, mouseY)
})

canvas.addEventListener("mouseover", (event) => {
    mouseDisplayed = true
})
canvas.addEventListener("mouseout", (event) => {
    mouseDisplayed = false
})

canvas.addEventListener("click", (event) => {
    let x = event.clientX
    let y = event.clientY
    addTower(x, y)
})