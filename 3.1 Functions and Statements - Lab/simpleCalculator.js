function simpleCalculator(firstNumber, secondNumber, operator) {
    switch (operator) {
        case 'multiply':
            const multiplyResult = (firstNumber, secondNumber) => firstNumber * secondNumber;
            console.log(multiplyResult(firstNumber, secondNumber));
            break;
        case 'divide':
            const divideResult = (firstNumber, secondNumber) => firstNumber / secondNumber;
            console.log(divideResult(firstNumber, secondNumber));
            break;
        case 'add':
            const addResult = (firstNumber, secondNumber) => firstNumber + secondNumber;
            console.log(addResult(firstNumber, secondNumber));
            break;
        case 'subtract':
            const subtractResult = (firstNumber, secondNumber) => firstNumber - secondNumber;
            console.log(subtractResult(firstNumber, secondNumber));
            break;
    }
}


simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');
