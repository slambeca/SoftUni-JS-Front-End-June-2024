function reversedChars(charA, charB, charC) {
    console.log(`${charC} ${charB} ${charA}`);
}

reversedChars('A', 'B', 'C');

// Variant 2
function reversedChars(charA, charB, charC) {
    console.log(charC + ' ' + charB + ' ' + charA);
}

reversedChars('A', 'B', 'C')

// Variant 3
function reversedChars(...args) {
    console.log(args.reverse().join(' '));
}

reversedChars('A', 'B', 'C')
