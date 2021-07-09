
function loadSketch(numCols=10) {
    while (isNaN(numCols) || numCols < 1 || numCols > 100) {
        numCols = prompt("Please choose a number, 1 - 100 is valid. 10 is default")
    }
    let container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numCols}, 1fr)`;

    var pastBoxes = Array.from(container.childNodes);
    pastBoxes.map(x => x.remove());

    let COLOR_GRID = [];
    for (let i = 0; i < numCols * numCols; i++) {
        var sq = document.createElement("div");
        sq.style.backgroundColor = "rgb(98%, 98%, 98%)";
        container.appendChild(sq);
        COLOR_GRID.push({r: 256, g: 256, b: 256});
        sq.addEventListener("mouseenter", function(event) {
            var colorValues = COLOR_GRID[i];
            if (colorValues.r > 31) {
                colorValues.r -= 32;
                colorValues.g -= 32;
                colorValues.b -= 32;
                event.target.style.backgroundColor = `rgb(${colorValues.r}, ${colorValues.g}, ${colorValues.b})`;
            }
        })
    }
}

loadSketch();

const resetSketch = document.querySelector("#restart");
resetSketch.addEventListener("click", function() {
    loadSketch(prompt("Choose how large of a grid you want, 1 - 100 is valid. 10 is default"))
});
