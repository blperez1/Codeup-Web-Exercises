function returnMultiplicationTable(num) {
    let multiply = "";
    for (let i = 1; i <= 10; i++) {
        multiply += `${num} x ${i} = ${i * num}`;
        if (i !== 10) {
            multiply += '\n'
        }
    }
    return multiply;
}

returnMultiplicationTable(7);

function returnEvenOddMessages(num) {
    if (num % 2 == 0) {
        return "even"
    } else if (num % 2 != 0) {
        return "odd"
    }
}
function returnTenEvenOddMessages() {
    let evenOdd = ""
    for (let i = 1; i < 11; i++) {
        let random = Math.floor((Math.random() * 180) + 20);
        if (random % 2 === 0) {
            evenOdd += `${random} is even`
        } else if (random % 2 === 1) {
            evenOdd += `${random} is odd`
        }
        if (i !== 10) evenOdd += '\n'
    }
    return evenOdd;
}

returnTenEvenOddMessages();

function returnNumberSail() {
    let str = ''
    for (let i = 1; i < 10; i++) {
        let j = i.toString()
        str += j.repeat(i);

        if (i !== 9) str += '\n'
    }
    return str;
}
console.log(returnNumberSail());

function returnCountDownFrom100InFives() {
    let output = ""
    for (let i = 100; i >= 5; i -= 5) {
        output += i
        if (i !== 5) output += "\n"
    }
    return output
}

// console.log(returnCountDownFrom100InFives())