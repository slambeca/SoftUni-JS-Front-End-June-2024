function printOddAndEvenSum(num=Number) {

    let oddSum = 0;
    let evenSum = 0;

    const numAsString = num.toString();

    for (i=0; i<numAsString.length; i++) {
        if (numAsString[i] % 2 == 0) {
            evenSum += Number(numAsString[i])
        } else {
            oddSum += Number(numAsString[i])
        }
    }


    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

printOddAndEvenSum(1000435);
printOddAndEvenSum(3495892137259234);
