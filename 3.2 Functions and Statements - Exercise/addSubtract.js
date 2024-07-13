function addAndSubtract(firstNum, secondNum, thirdNum) {
    const sumTwoNumbers = (x, y) => x + y;
    const subtractTwoNumbers = (x, y) => x - y;

    const firstResult = sumTwoNumbers(firstNum, secondNum);
    const secondResult = subtractTwoNumbers(firstResult, thirdNum)

    console.log(secondResult);
}

addAndSubtract(10, 20, 30);
