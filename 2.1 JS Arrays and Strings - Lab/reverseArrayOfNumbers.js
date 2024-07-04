function reverseArray(count, numbersArray) {
    const startIndex = 0;
    let newList = numbersArray.slice(startIndex, startIndex+count);
    let reversedArray = newList.reverse();

    console.log(reversedArray.join(' '));
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);

// Variant 2
function reverseArray(count, numbersArray) {
    console.log(numbersArray.slice(0, 0+count).reverse().join(' '));
}