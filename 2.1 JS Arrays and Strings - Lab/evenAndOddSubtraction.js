function evenAndOdd(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    let result = 0;

    for(let currentNum of numbers) {
        if (Number(currentNum) % 2 === 0) {
            evenSum += Number(currentNum);
        } else {
            oddSum += Number(currentNum);
        }
    }

    result = evenSum - oddSum;

    console.log(result);
}

evenAndOdd([1,2,3,4,5,6]);
evenAndOdd([3,5,7,9]);
evenAndOdd([2,4,6,8,10]);