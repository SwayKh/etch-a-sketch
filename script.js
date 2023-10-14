const grid = document.querySelector('.grid')
const resizeButton = document.querySelector('#resize-button')
const pixel = document.querySelectorAll('.pixel')

let size = 16

resizeButton.addEventListener('click', () => {
    size = prompt("Size of the grid: ", "16")
    console.log(size)
    renderGrid(size)
})

function renderGrid() {
    pixel.forEach(element => {
        grid.removeChild(element)
    });
    for (let i = 0; i <= size ** 2; i++) {
        const pixelDiv = document.createElement("div")
        pixelDiv.className = "pixel"
        pixelDiv.style.minWidth = 40 + "px"
        pixelDiv.style.minHeight = 40 + "px"
        pixelDiv.style.backgroundColor = "black"
        grid.appendChild(pixelDiv)
    }
}
renderGrid()



