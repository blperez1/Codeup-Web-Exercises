"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function analyzeColor(color) {
    if (color === "blue") {
        return "Blue is the color of the sky"
    } else if (color === "red") {
        return "Straberries are red"
    }
    return `I don't know anything about ${color}.`

}

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColorSwitch(color) {
    switch (color.toLowerCase()) {
        case "red":
            return "Straberries are red";
        case "orange":
            return "An orange is an orange";
        case "yellow":
            return "Yellow is the color of sunflowers.";
        case "green":
            return "Green is the color of grass";
        case "blue":
            return "Blue is the color of the sky.";
        default:
            return `${randomColor} is not my favorite.`;
    }
}
console.log(analyzeColorSwitch(randomColor))
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
// let userColor = prompt("Choose a color");
// alert(analyzeColor(userColor));
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let lucky = Math.floor(Math.random() * 5);
function calculateTotal(randomNumber, total) {
    switch (randomNumber) {
        case 0:
        case 6:
            return `No discount applied. Your total: $${total}`;
        case 1:
            return `You get 10% off your purchase. Your total: $${total - (total * .10)}`;
        case 2:
            return `You get 25% off your purchase. Your total: $${total - (total * .25)}`;
        case 3:
            return `You get 35%% off your purchase. Your total: $${total - (total * .35)}`;
        case 4:
            return `You get 50% off your purchase. Your total: $${total - (total * .50)}`;
        case 5:
            return "You get 100% off your entire purchase. Your total: $0";


    }
}
console.log(calculateTotal(1, 100));
console.log(calculateTotal(0, 100))
console.log(calculateTotal(4, 100))
console.log(calculateTotal(5, 100))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);
let userBill = prompt("Enter total bill");
alert(`Your Lucky Number: ${luckyNumber}. Your total before possible discount: $${userBill}`)
alert(calculateTotal(luckyNumber, userBill));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let enterNumber = confirm("Would you like to enter a number?");


function evenOdd(num) {
    if (num % 2 === 0) return `${num} is even`;

    return `${num} is odd`;
}

function addOneHundred(num) {
    return `${num} + 100 = ${+num + 100}`;
}

function positiveNegative(num) {
    if (num > 0) return `${num} is positive`;

    return `${num} is negative`;
}

function enteredAnswer(userAnswer) {
    if (userAnswer) {
        let userNumber = prompt("Enter a number");
        if (isNaN(userNumber)) {
            alert(`I asked for a number! I don't want to play anymore.`)
        }

        alert(evenOdd(userNumber));
        alert(addOneHundred(userNumber));
        alert(positiveNegative(userNumber));

    } else {
        alert("Jerk")
    }
}

enteredAnswer(enterNumber)