const grid = document.querySelector('.container')
const resizeButton = document.querySelector('#resize-button')
const clearButton = document.querySelector('#clear-button')

let size = 16

resizeButton.addEventListener('click', () => {
    size = prompt("Size of the grid: ", "16")
    while (size < 16 || size > 100) {
        alert("Please enter a value above 16 and below 100")
        size = prompt("Size of the grid: ", "16")
    }
    console.log(size)
    renderGrid(size)
})

clearButton.addEventListener('click', () => {
    resetGrid()
})

function renderGrid(noOfItems) {
    console.log("no of items: " + noOfItems)
    console.log("container height: " + grid.style.minHeight)
    resetGrid()
    for (let i = 1; i <= size ** 2; i++) {
        const pixelDiv = document.createElement("div")
        pixelDiv.className = "pixel"
        pixelDiv.style["min-width"] = grid.style.minWidth / noOfItems + "px"
        pixelDiv.style["max-height"] = grid.style.minHeight / noOfItems + "px"
        // pixelDiv.style.aspectRatio = "1/1"
        grid.appendChild(pixelDiv)
    }
}

function resetGrid() {
    const pixel = document.querySelectorAll('.pixel')
    pixel.forEach((element) => {
        grid.removeChild(element)
    });
}
renderGrid(25)