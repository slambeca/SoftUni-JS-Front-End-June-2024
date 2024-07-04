function findStringOccurrences(text, word) {
    const testAsArray = text.split(' ');
    let counter = 0;

    for (let currentWOrd of testAsArray) {
        if (currentWOrd === word) {
            counter ++;
        }
    }

    console.log(counter);
}

findStringOccurrences('This is a word and it also is a sentence', 'is');
findStringOccurrences('softuni is great place for learning new programming languages', 'softuni');