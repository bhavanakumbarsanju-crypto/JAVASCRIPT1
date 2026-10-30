let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let newGamebutton = document.querySelector("#new");
let msgconatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;

let winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];
const resetGame = () => {
    turno = true;
    enableBoxes();
    msgconatiner.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (turno) {
            box.innerText = "O"
            turno = false;
        }
        else {
            box.innerText = "X"
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const disableBoxes = () => {
    for (let box of boxes)
        box.disabled = true;

};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled - false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `congratulations,winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    disableBoxes();
}
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("winner", pos1Val);
                showwinner(pos1Val);
            }
        }



    }

};

newGamebutton.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
