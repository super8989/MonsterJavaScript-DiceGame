const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", function() {
    let rollDice = roll(6); //1-6
    console.log(rollDice);
    let holder = builder(rollDice); //builder(1-6)
    console.log(output.children[0]);

    if (output.children[0]) {
        output.children[0].remove();
    }

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