function everyNElement(array=[], step=Number) {
    let currentArray = array;
    let resultArray = [];

    for(let i=0; i<currentArray.length; i+=step) {
        resultArray.push(currentArray[i]);
    }

    return resultArray;

}

console.log(everyNElement(['5', '20', '31', '4', '20'], 2));
console.log(everyNElement(['dsa','asd', 'test', 'tset'], 2));
console.log(everyNElement(['1', '2','3', '4', '5'], 6));