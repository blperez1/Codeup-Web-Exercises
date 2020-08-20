// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// for (var i = 1; i < 100; i++) {
//     if (i % 3 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//     console.log('Here is a lovely number: ' + i);
// }

let response = prompt("Please enter an odd number between 1 and 50");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    } else if (response == i) {
        console.log("Yikes!! Number to skip is: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }
    if (i >= 51) {
        break;
    }
}




// function conesToSellForTheDay() {
//     var customerPurchase = Math.floor(Math.random() * 5) + 1;
//     do {
//         if (allCones > 0) {
//             allCones -= customerPurchase
//             console.log(customerPurchase + " cones sold.")
//         } else if ((allCones > 0) && (allCones < customerPurchase)) {
//             console.log("I can't sell you " + customerPurchase + " cones because I only have " + allCones + " cones left.")
//         } else if (allCones === 0) {
//             console.log("Yay! I sold them all!")
//         }
//     } while (allCones > 0)
// }
// conesToSellForTheDay()
var allCones = Math.floor(Math.random() * 50) + 50;
let iceCreamConeSales = function () {
    do {
        let customerCones = Math.floor(Math.random() * 5) + 1;
        if (allCones === 0) {
            console.log("Yay, I sold them all!");
        } else if (allCones < customerCones && allCones > 0) {
            console.log("Cannot sell you " + customerCones + " cones. I only have " + allCones + " left");
        } else if (allCones > 0) {
            console.log(customerCones + " cones sold.");
            allCones = allCones - customerCones;
        }
    } while (allCones > 0);
}
iceCreamConeSales();
