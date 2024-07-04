function censoredWords(text, word) {
    console.log(text.replaceAll(word, '*'.repeat(word.length)));
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');

// Variant 2
function solveWithoutReplaceAll(text, word) {
    while(text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length))
    }

    console.log(text);
}

solveWithoutReplaceAll('A small sentence with small words', 'small');
solveWithoutReplaceAll('Find the hidden word', 'hidden');
