function findOddOccurrences(input) {
    let result = {};

    let words = input.toLowerCase().split(' ');

    for(let word of words) {
        if (result[word]) {
            result[word] += 1;
        } else {
            result[word] = 1;
        }
    }

    const oddOccurrences = Object.keys(result).filter(word => result[word] % 2 != 0);

    console.log(oddOccurrences.join(' '));
}

findOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
