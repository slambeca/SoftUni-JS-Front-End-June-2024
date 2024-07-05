function sortNames (array=[]) {
    let sortedArray = array.sort((a, b) => a.localeCompare(b));
    let resultArray = [];

    for (let i=0; i<sortedArray.length; i++) {
        resultArray.push(`${i+1}.${sortedArray[i]}`)
    }

    console.log(resultArray.join('\n').trim());
}

sortNames(["John", "Bab", "Bob", "Christina", "Ema", "BB"]);