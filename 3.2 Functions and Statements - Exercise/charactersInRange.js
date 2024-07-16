function printCharactersInRange(char1='', char2='') {

    let result = '';

    let startChar = char1.charCodeAt(0);
    let endChar = char2.charCodeAt(0);

    if (startChar > endChar) {
        [startChar, endChar] = [endChar, startChar];
    }

    for (let i = startChar+1; i < endChar; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    console.log(result);

}

printCharactersInRange('a', 'd');
printCharactersInRange('#', ':');
printCharactersInRange('C', '#');
