function getCells() {
    return document.getElementsByClassName("cell");
}


function cellClick(evt) {
    const cell = evt.target;
    const color = cell.getAttribute("data-color");
    console.log("color: ", color)
}

function getRandomColor() {
    const colors = ["red", "green", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function colorCells() {
    const cells = getCells();
    for (var i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const color = getRandomColor();
        cell.style.backgroundColor = color;
        cell.setAttribute("data-color", color);
        window.setTimeout(
            () => { cell.style.backgroundColor = null; },
            5000
        )
    }
}

function initialize() {
    colorCells();
}