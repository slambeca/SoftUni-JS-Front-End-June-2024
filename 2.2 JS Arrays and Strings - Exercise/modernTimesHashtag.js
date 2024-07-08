function solve(string) {
    const separateWords = string.split(' ');
    const pattern = /^#([A-Za-z]+$)/g;

    for (let word of separateWords) {
        if (pattern.test(word)) {
            console.log(word.slice(1));
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');

// 80/100 in Judge

// Variant 2
function findAndPrintSpecialWords(inputString) {
    const pattern = /#[a-zA-Z]+/g;
    const matches = inputString.match(pattern);

    if (matches) {
        matches.forEach(match => {
            const wordWithoutHash = match.slice(1);
            if (/^[a-zA-Z]+$/.test(wordWithoutHash)) {
                console.log(wordWithoutHash);
            }
        });
    }
}