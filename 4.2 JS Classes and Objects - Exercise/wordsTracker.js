function wordsTracker(input) {
    let result = {};

    let searchedWords = input[0].split(' ');

    searchedWords.forEach(word => {
        result[word] = 0;
    });

    const restOfTheWords = input.slice(1);
    
    for(let searchedWord of searchedWords) {
        for(let otherWord of restOfTheWords) {
            if (searchedWord === otherWord) {
                result[searchedWord] += 1;
            }
        }
    }


    const sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

    sortedResult.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });


}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );
