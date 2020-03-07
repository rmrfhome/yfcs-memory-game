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

function startNewRound() {
    colorCells();
    const targetColor = getRandomColor();
    assignCellClickHandlers(targetColor);
    displayStatusBarMessage("Memorize...");
    window.setTimeout(
        () => { displayRoundTask(targetColor); },
        5000
    )
}

function countCellsByColor(targetColor) {
    var count = 0;
    const cells = getCells();
    for(var i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const cellColor = cell.getAttribute("data-color");
        if(cellColor === targetColor)
            count++;
    }
    return count;
}

function assignCellClickHandlers(targetColor) {
    var counter = countCellsByColor(targetColor);
    const cells = getCells();
    for(var i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.addEventListener("click", () => {
            const cellColor = cell.getAttribute("data-color");
            if(cellColor !== targetColor) {
                loseRound();
                counter = -1;
            } else {
                counter--;
                if(counter === 0)
                winRound();
            }
        });
    }
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
            3000
        )
    }
}

function displayRoundTask(targetColor) { 
    displayStatusBarMessage("Click all cells of " + targetColor + " color");
}

function loseRound() {
    displayStatusBarMessage("Lost :-(");
}
function winRound() { 
    displayStatusBarMessage("Win :-)");
}

function displayStatusBarMessage(message) { 
    const statusBar = document.getElementById('status-bar');
    statusBar.innerText = message;
}