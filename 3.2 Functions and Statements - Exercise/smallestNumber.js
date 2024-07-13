function findSmallestNumber(firstNum=Number, secondNum=Number, thirdNum=Number) {
    const smallestNumber = Math.min(firstNum, secondNum, thirdNum);

    console.log(smallestNumber);
}


findSmallestNumber(2, 5, 3);
findSmallestNumber(600, 342, 123);
findSmallestNumber(25, 21,4);
findSmallestNumber(2, 2, 2);

// Variant 2
function findSmallestNumberNew(a, b, c) {
    let smallestNumber = a;

    if (b < smallestNumber) {
        smallestNumber = b;
    }

    if (c < smallestNumber) {
        smallestNumber = c;
    }

    console.log(smallestNumber);
}

findSmallestNumberNew(2, 10, 5);
