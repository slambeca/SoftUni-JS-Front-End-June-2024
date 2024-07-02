function calculator(numOne, operation, numTwo) {
    let result = 0;

    const isPlus = operation === '+';
    const isMinus = operation === '-';
    const isSubtract = operation === '/';
    const isMultiply = operation === '*';

    if (isPlus) {
        result = numOne + numTwo
    } else if (isMinus) {
        result = numOne - numTwo
    } else if (isSubtract) {
        result = numOne / numTwo
    } else if (isMultiply) {
        result = numOne * numTwo
    }

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);
calculator(30, "*", 10);
calculator(10, '/', 2);