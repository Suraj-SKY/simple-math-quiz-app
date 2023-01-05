let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
const operator = Math.ceil(Math.random() * 4 - 1);
const opStr = ["+", "-", "*", "/"]; // operator array

const questionElement = document.getElementById("question");
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");
const resetElement = document.getElementById("reset");

let score = localStorage.getItem("score") ? JSON.parse(localStorage.getItem("score")) : 0;
// let score = JSON.parse(localStorage.getItem("score"));
// if (!score) {
//     score = 0;
// }

scoreElement.innerText = `Score: ${score}`;

if (opStr[operator] === "/") {
    if (num2 > num1) {
        num1 = (operator + 1) * num2;
        // just making it multiple of num1
    }
}
else if (opStr[operator] === "-") {
    if (num1 < num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
}

questionElement.innerText = `What is ${num1} ${opStr[operator]} ${num2} ?`;
// here innerText and innerHTML both can be used

let correctAns;
if (opStr[operator] === "+") {
    correctAns = num1 + num2;
}
else if (opStr[operator] === "-") {
    correctAns = num1 - num2;
}
else if (opStr[operator] === "*") {
    correctAns = num1 * num2;
}
else if (opStr[operator] === "/") {
    correctAns = num1 / num2;
}

formElement.addEventListener("submit", () => {
    if (inputElement.value === "") {
        alert("Please enter a number");
    }
    else {

        const userAns = +inputElement.value;
        //notes: if we add + before inputElement.value then it will convert string to number

        // alert("input is", inputElement.value);
        // alert("userAns is", userAns);

        if (userAns === correctAns) {
            score++;
            updateLocalStorage();
        }
        else {
            score--;
            updateLocalStorage();
        }
    }
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

resetElement.addEventListener("click", () => {
    score = 0;
    localStorage.clear();
    scoreElement.innerText = `Score: ${score}`;
});