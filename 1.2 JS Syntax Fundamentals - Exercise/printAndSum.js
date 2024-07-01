function printAndSum(firstNum, secondNum) {
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
        process.stdout.write(i.toString() + ' ');
    }

    console.log('\n' + `Sum: ${sum}`)

}

printAndSum(50, 60);