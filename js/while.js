let i = 2;
while (i < 65537) {
    console.log(i)
    i *= 2;
}

let allCones = Math.floor(Math.random() * 50) + 50;
do {
    let j = Math.floor(Math.random() * 5) + 1;
    allCones -= j
    if (allCones === 0) {
        console.log("We sold them all!")
    } else if (allCones < j) {
        console.log("I don't have enough cones");
    } else if (allCones > 0) {
        console.log(`${j} cones is what you ordered`);
    }
} while (allCones > 0);
