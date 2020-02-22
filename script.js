const colours = ["red", "green", "blue"];

function getCells() {
    return document.getElementsByClassName("cell");
}

function numerateCells() {
    const cells = getCells();
    for (var i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.setAttribute("data-index", i);
    }
}

function cellClick(evt) {
    const cell = evt.target;
    const index = cell.getAttribute("data-index");
    console.log(index)
}

function initialize() {
    numerateCells();
}