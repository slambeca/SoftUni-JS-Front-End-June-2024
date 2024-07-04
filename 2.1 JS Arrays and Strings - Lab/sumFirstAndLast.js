function sumFirstAndLast(numbersArray) {
    let sum = 0;

    let firstElement = numbersArray[0];
    let lastElement = numbersArray[numbersArray.length - 1];
    sum = firstElement + lastElement;

    console.log(sum);
}

sumFirstAndLast([10, 17, 22, 33])

// Variant 2
function sumFirstAndLast(numbersArray) {
    console.log(numbersArray[0] + numbersArray[numbersArray.length - 1]);
}

sumFirstAndLast([10, 20, 30])


// Variant 3 (Not recommended)
function sumFirstAndLastNew(numbers) {
    let first = numbers.shift();
    let last = numbers.pop();

    console.log(first + last);
}

sumFirstAndLast([10, 20, 30])
