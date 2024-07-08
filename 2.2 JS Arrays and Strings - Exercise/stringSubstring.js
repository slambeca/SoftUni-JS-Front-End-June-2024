function stringSubstring(word='', text='') {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase();

    if (lowerCaseText.includes(lowerCaseWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');

// 80/100 in Judge

function solve(word='', text='') {
    const match = text.split(' ').find((x) => x.toLowerCase() === word.toLowerCase());

    console.log(match ? word : `${word} not found!`);
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');

// Variant 3
function solve(word, text) {
    const splittedText = text.split(' ');
    let match;

    for(let currentWord of splittedText) {
        if (word.toLowerCase() === currentWord.toLowerCase()) {
            match = currentWord;
    }
    }
    console.log(match ? word : `${word} not found!`);
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');
