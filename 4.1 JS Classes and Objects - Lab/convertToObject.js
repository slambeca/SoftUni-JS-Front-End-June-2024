function solve(someString="") {
    let convertedString = JSON.parse(someString)

    let convertedStringKeys = Object.keys(convertedString);

    for(let key of convertedStringKeys) {
        console.log(`${key}: ${convertedString[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
