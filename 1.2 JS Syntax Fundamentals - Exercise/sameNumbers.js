function sameNumbers(number) {
    let totalSum = 0;
    numberAsString = String(number);
    let allSame = true;
    
    firstNum = numberAsString[0];

    for(i = 0; i < numberAsString.length; i ++) {
        totalSum += Number(numberAsString[i]);

        if (firstNum !== numberAsString[i]) {
            allSame = false;
        }
    }
    
    console.log(allSame);
    console.log(totalSum);
}

sameNumbers(2222222);