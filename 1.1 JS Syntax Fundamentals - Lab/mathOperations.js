function mathOperations(numberOne, numberTwo, operator) {
    let result;

    switch (operator) {
        case '+':
            result = numberOne + numberTwo;
            break;
        case '-':
            result = numberOne - numberTwo;
            break;
        case '*':
            result = numberOne * numberTwo;
            break;
        case '/':
            result = numberOne / numberTwo;
            break;
        case '%':
            result = numberOne % numberTwo;
            break;
        case '**':
            result = numberOne ** numberTwo;
            break;
    }

    console.log(result);
}

mathOperations(5, 6, '**')