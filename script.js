const turn_h2 = document.querySelector(".turn h2");
const turn = document.querySelector(".turn");
let currentPlayer = "X";
const hidden = document.getElementsByClassName("hidden");
const newGameButton = document.querySelector(".new-game")
const boxes = document.querySelectorAll(".box"); 

turn_h2.textContent = "X turn";


function X(box) {
    box.textContent = "X";
}

function O(box) {
    box.textContent = "O";
}


function store() {
    const board = new Array(9)
}

const boxId = [];
for (let i = 1; i <= 9; i++) {
    boxId.push(`box-${i}`); // Assuming your classes are like "box-1", "box-2", etc.
}



function handleTurn(turn) {
    turn_h2.textContent = `${turn} turn`;
}



newGameButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (box.textContent === "") {
                if (currentPlayer === "X") {
                    currentPlayer = "O";
                    X(box);
                    handleTurn("O");
                    turn.style.background = "var(--light_yellow)";
                    console.log(box.id)
                }
                else {
                    currentPlayer = "X";
                    O(box);
                    handleTurn("X");
                    turn.style.background = "var(--light_blue)";
                }

            }
        });

    });
    newGameButton.classList.add("hidden");
    turn.classList.remove("hidden");

})

function checkWinner(){
    const winningCombos = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ]
}
