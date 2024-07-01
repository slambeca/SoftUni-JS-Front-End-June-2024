function sumDigits(number) {
    const numberAsString = number.toString();
    let sum = 0;

    for(let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }

    console.log(sum);
}

sumDigits(245678); // should return 32

// Variant 2
function sumDigitsWhileLoop(number) {
    let currentNumber = number;
    let sum = 0;

    while(currentNumber > 0) {
        sum += currentNumber % 10;
        currentNumber = parseInt(currentNumber / 10);
    }

    console.log(sum);
}

sumDigitsWhileLoop(245678);
