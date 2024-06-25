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

// Variant 2 with eval()
function mathOperations(numberOne, numberTwo, operator) {
    const expression = `${numberOne} ${operator} ${numberTwo}`

    const result = eval(expression)

    console.log(result);
}

mathOperations(5, 6, '**')
