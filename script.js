const grid = document.querySelector(".container");
const resizeButton = document.querySelector("#resize-button");
const clearButton = document.querySelector("#clear-button");

let defaultSize = 16;
let currentGridSize = defaultSize;

function renderGrid(noOfItems) {
  for (let i = 1; i <= noOfItems ** 2; i++) {
    const pixelDiv = document.createElement("div");
    pixelDiv.className = "pixel";
    pixelDiv.style.backgroundColor = "white";
    pixelDiv.style.minWidth =
      String(grid.style.minWidth).replace("px", "") / noOfItems + "px";
    pixelDiv.style.minHeight =
      String(grid.style.minHeight).replace("px", "") / noOfItems + "px";
    grid.appendChild(pixelDiv);
  }
  currentGridSize = noOfItems;
}
renderGrid(defaultSize);

function resetGrid(existingSize) {
  const pixel = document.querySelectorAll(".pixel");
  pixel.forEach((element) => {
    element.style.backgroundColor = "white";
    grid.removeChild(element);
  });
  renderGrid(currentGridSize);
}

resizeButton.addEventListener("click", () => {
  currentGridSize = prompt("Size of the grid: ", "16");

  while (currentGridSize < 16 || currentGridSize > 100) {
    alert("Please enter a value above 16 and below 100");
    currentGridSize = prompt("Size of the grid: ", "16");
  }
  resetGrid(currentGridSize);
});

clearButton.addEventListener("click", () => {
  resetGrid(currentGridSize);
});

grid.addEventListener("mouseenter", (e) => {
  const pixel = document.querySelectorAll(".pixel");

  pixel.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "black";
    });
  });
});
