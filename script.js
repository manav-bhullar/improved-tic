const turn_h2 = document.querySelector(".turn h2");


function X(box_i) {
    box_i.textContent = "X";
}

function O(box_i) {
    box_i.textContent = "O";
}


function store() {
    const board = new Array(9)
}

const boxId = [];
for (let i = 1; i <= 9; i++) {
    boxId.push(document.getElementById(`box-${i}`));
}

let currentPlayer = "X";

const boxes = boxId.map(id => document.getElementById(id));
boxId.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "") {
            if (currentPlayer === "X") {
                currentPlayer = "O";
                X(box);
                handleTurn("O");
            }
            else {
                currentPlayer = "X";
                O(box);
                handleTurn("X");
            }

        }
    });
});

function handleTurn(turn) {
    turn_h2.textContent = `${turn} turn`;
    console.log("Button clicked!");
}