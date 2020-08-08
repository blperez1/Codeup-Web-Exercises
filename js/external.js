"use strict"

alert("Welcome to my Website!")

let userColor = prompt("What is your favorite color?")
alert(`Great, ${userColor} is my favorite color too!`)

alert("Movie rentals are $3 a day.")
let littleMermaid = prompt("How many days would you like to rent 'The Little Mermaid'?");
let brotherBear = prompt("How many days would you like to rent 'Brother Bear'?");
let hercules = prompt("How many days would you like to rent 'Hercules'?");

function rentTotal(m1, m2, m3) {
    let total = (+m1 + +m2 + +m3) * 3;
    alert(`Your rental total: $${total}`);
}

rentTotal(littleMermaid, brotherBear, hercules)

alert("You have been very busy at work this week!")
let google = prompt("Google is paying $400/hr. How many hours did you work this week?")
let amazon = prompt("Amazon is paying $380/hr. How many hours did you work this week?")
let facebook = prompt("Facebook is paying $350/hr. How many hours did you work this week?")

function payCheck() {
    let pay = (+google * 400) + (+amazon * 380) + (+facebook + 350);
    alert(`This week's pay: $${pay}`)
}
payCheck();

alert("Let's see if you have room in your schedule to enroll in more classes.")
let classCount = prompt("How many classes are you currently enrolled in?");
function enroll(classes) {
    if (classes >= 5) {
        alert("Your schedule is full. You cannot enroll into any more classes")
    }
    alert(`You have room in your schedule to take ${5 - +classes} more class/classes`)
}

enroll(classCount);

alert("Let's see if you qualify for this product offer")

function howManyItems() {
    let numberOfItems = prompt("Non-member must buy a certain number of items for this offer. How many items did you buy?");
    if (numberOfItems >= 2) {
        alert("Product offer applied")
    } else if (numberOfItems < 2) {
        alert("You must buy 2 or more items for this offer to be applied.")
    }
}

function isMember() {
    let member = prompt("Are you a member?").toLowerCase()
    if (member[0] === "y") {
        alert("Product offer applied")
    } else if (member[0] === "n") {
        howManyItems();
    }
}

function isOfferExpired() {
    let isExpired = prompt("Is the offer expired?").toLowerCase()
    if (isExpired[0] === "n") {
        isMember()
    } else if (isExpired[0] === "y") {
        alert("Offer is expired. Offer not applied")
    }
}

isOfferExpired();





