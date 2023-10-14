const grid = document.querySelector('.container')
const resizeButton = document.querySelector('#resize-button')

let size = 2

resizeButton.addEventListener('click', () => {
    size = prompt("Size of the grid: ", "16")
    console.log(size)
    renderGrid()
})

function renderGrid() {
    resetGrid()
    for (let i = 1; i <= size ** 2; i++) {
        const pixelDiv = document.createElement("div")
        pixelDiv.className = "pixel"
        pixelDiv.textContent = i
        pixelDiv.style.color = "white"
        pixelDiv.style.backgroundColor = "#333333"
        pixelDiv.style.textAlign = "center"
        pixelDiv.style.minWidth = String(grid.style.minWidth / size) + "px"
        pixelDiv.style.minHeight = String(grid.style.minHeight / size) + "px"
        pixelDiv.style.aspectRatio = "1/1"
        grid.appendChild(pixelDiv)
    }
}
renderGrid()

function resetGrid() {
    const pixel = document.querySelectorAll('.pixel')
    pixel.forEach((element) => {
        grid.removeChild(element)
    });
}