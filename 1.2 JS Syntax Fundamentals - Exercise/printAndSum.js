function printAndSum(firstNum, secondNum) {
    let sum = 0;

    for(let i = firstNum; i <= secondNum; i++) {
        sum += i;
        process.stdout.write(i.toString() + ' ');
    }

    console.log('\n' + `Sum: ${sum}`)

}

printAndSum(50, 60);

// Variant 2
function printAndSum(firstNum, secondNum) {
    let output = "";
    let sum = 0;

    for(let currentNumber=firstNum; currentNumber <= secondNum; currentNumber += 1) {
        output += `${currentNumber} `;
        sum += currentNumber
    }

    console.log(output.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60);
