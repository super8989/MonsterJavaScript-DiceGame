const button = document.querySelector("button");
const output = document.querySelector(".output");
const dice = [[5], [1,9], [1,5,9], [1,3,7,9], [1,3,5,7,9], [1,3,4,6,7,9]]; //position of the dots with 9 locations on a square face (3x3 locations)

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
    let dieArray = dice[num-1];

    console.log(dieArray);

    for (let x=1; x<10; x++) {
        let span = document.createElement("div");
        span.setAttribute("class", "dot");

        if (dieArray.includes(x)) {
            span.classList.add("black");
        }
        div.appendChild(span);
    }

    div.setAttribute("class", "dicer"); 
    return div;
}

function roll(num) {
    let rollNumber = Math.floor(Math.random()*num)+1;
    return rollNumber;
}