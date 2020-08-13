function returnMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${i * num}`);
    }
}
returnMultiplicationTable(7)



function returnTenEvenOddMessages() {
    for (let i = 1; i <= 10; i++) {
        let random = Math.floor((Math.random() * 200) + 20);
        random % 2 === 0 ? console.log(`${random} is even`) : console.log(`${random} is odd`);
    }
}

returnTenEvenOddMessages()

function returnNumberSail() {
    for (let i = 1; i < 10; i++) {
        let j = i.toString()
        console.log(j.repeat(i));
    }
}
returnNumberSail();

function returnCountDownFrom100InFives() {
    for (let i = 100; i >= 5; i--) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

returnCountDownFrom100InFives();