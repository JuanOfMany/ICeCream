"use strict"

function handleEverything(event) {
    console.log(event.target)
}

function handleCup(event) {
    let toppings = document.getElementById("toppings");
    console.log(event)
    if (toppings.style.display === 'none') {
        toppings.style.display = "block"
    } else {
        toppings.style.display = "none"
    }
}

function handleNumOfScoops(event) {
    if (event.target.value) {
        console.log(event.target.value)
    }
}

let total = 0;

window.addEventListener("load", () => {
    console.log('hello')

    let inputs = ['numOfScoops', 'cup', 'cone', 'sprinkles', 'whippedCream', 'hotFudge', 'cherry', 'submit']

    for (let i = 0; i < inputs.length; i++) {
        let input = document.getElementById(inputs[i])
        if (inputs[i] === 'cup') {
            input.addEventListener("change", handleCup)
            break;
        }
        if (inputs[i] === 'numOfScoops') {
            input.addEventListener("change", handleNumOfScoops)
        }
        input.addEventListener("click", handleEverything)
    }
})