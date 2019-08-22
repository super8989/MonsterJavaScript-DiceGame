const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", function() {
    let rollDice = roll(6); //1-6
    console.log(rollDice);
    let holder = builder(rollDice); //builder(1-6)
    output.appendChild(holder);
})

function builder(num) {
    let div = document.createElement("div");
    div.setAttribute("class", "dicer");
    return div;
}

function roll(num) {
    let rollNumber = Math.floor(Math.random()*num)+1;
    return rollNumber;
}