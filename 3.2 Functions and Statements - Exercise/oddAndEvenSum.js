function printOddAndEvenSum(num=Number) {
    let oddSum = 0;
    let evenSum = 0;

    const numAsString = num.toString();

    for (i = 0; i < numAsString.length; i++) {
        if (numAsString[i] % 2 === 0) {
            evenSum += Number(numAsString[i]);
        } else {
            oddSum += Number(numAsString[i]);
        }
    }


    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

printOddAndEvenSum(1000435);
printOddAndEvenSum(3495892137259234);

// Variant 2

function printOddAndEvenSum2(num=Number) {
    function sum(array) {
        return array.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0)
    }

    let oddNumbers = [];
    let evenNumbers = [];

    const numAsString = num.toString();

    for (i = 0; i < numAsString.length; i++) {
        if (numAsString[i] % 2 === 0) {
            evenNumbers.push(numAsString[i]);
        } else {
            oddNumbers.push(numAsString[i]);
        }
    }

    let sumOddNumbers = sum(oddNumbers);
    let sumEvenNumbers = sum(evenNumbers);

    console.log(`Odd sum = ${sumOddNumbers}, Even sum = ${sumEvenNumbers}`);
}

printOddAndEvenSum2(1000435);
printOddAndEvenSum2(3495892137259234);
