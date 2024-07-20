function solve(someString="") {
    let convertedString = JSON.parse(someString);

    let convertedStringKeys = Object.keys(convertedString);

    for(let key of convertedStringKeys) {
        console.log(`${key}: ${convertedString[key]}`);
    }
};

solve('{"name": "George", "age": 40, "town": "Sofia"}');

// Variant 2
function solve2(someNewString="") {
    let object = JSON.parse(someNewString);

    let entries = Object.entries(object);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
};
