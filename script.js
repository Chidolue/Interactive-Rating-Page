let firstButton = document.getElementById("firstButton");
let secondButton = document.getElementById("secondButton");
let thirdButton = document.getElementById("thirdButton");
let fourthButton = document.getElementById("fourthButton");
let fifthButton = document.getElementById("fifthButton");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

function refactor() {
    firstButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.097)";
    secondButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.097)";
    thirdButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.097)";
    fourthButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.097)";
    fifthButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.097)";
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;
}

firstButton.addEventListener("click", function() {
    if(count1 % 2 === 0) {
        refactor();
        firstButton.style.backgroundColor = "white";
    }
    else{
        firstButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.097)";
    }
    count1++;
})

secondButton.addEventListener("click", function() {
    if(count2 % 2 === 0) {
        refactor();
        secondButton.style.backgroundColor = "white";
    }
    else{
        secondButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.097)";
    }
    count2++;
})

thirdButton.addEventListener("click", function() {
    if(count3 % 2 === 0) {
        refactor();
        thirdButton.style.backgroundColor = "white";
    }
    else{
        thirdButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.097)";
    }
    count3++;
})

fourthButton.addEventListener("click", function() {
    if(count4 % 2 === 0) {
        refactor();
        fourthButton.style.backgroundColor = "white";
    }
    else{
        fourthButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.097)";
    }
    count4++;
})

fifthButton.addEventListener("click", function() {
    if(count5 % 2 === 0) {
        refactor();
        fifthButton.style.backgroundColor = "white";
    }
    else{
        fifthButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.097)";
    }
    count5++;
})