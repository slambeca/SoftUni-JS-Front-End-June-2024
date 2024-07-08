function sortingNumbers(numArray=[]) {
    let sortedNumArray = numArray.sort((a, b) => a - b);
    let newNumArray = [];

    while(sortedNumArray.length > 0) {
        let firstNum = sortedNumArray.shift();
        let lastNum = sortedNumArray.pop();
        newNumArray.push(firstNum);
        newNumArray.push(lastNum);
    }

    return newNumArray;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));