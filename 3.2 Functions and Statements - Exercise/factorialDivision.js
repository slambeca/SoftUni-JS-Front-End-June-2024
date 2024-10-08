function findResult(firstNum=Number, secondNum=Number) {
    let resultFirstFactorial = 1;
    let resultSecondFactorial = 1;

    for (i = 1; i <= firstNum; i++) {
        resultFirstFactorial *= i;
    }

    for (j = 1; j <= secondNum; j++) {
        resultSecondFactorial *= j;
    }

    console.log((resultFirstFactorial / resultSecondFactorial).toFixed(2));
}

findResult(5, 2);
findResult(6, 2);

// Variant 2
function findResult(firstNum, secondNum) {
    const factorial = n => n ? n * factorial(n - 1) : 1;
    console.log((factorial(firstNum) / factorial(secondNum)).toFixed(2));
}

findResult(5, 2);
findResult(6, 2);
