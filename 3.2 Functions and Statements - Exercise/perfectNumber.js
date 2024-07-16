function checkForPerfectNumber(number=Number) {
    let totalSum = 0;

    for(let i = 1; i < number; i++) {
        if (number % i === 0) {
            totalSum += Number(i);
        }
    }

    if (totalSum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

}

checkForPerfectNumber(28);
checkForPerfectNumber(1236498);
