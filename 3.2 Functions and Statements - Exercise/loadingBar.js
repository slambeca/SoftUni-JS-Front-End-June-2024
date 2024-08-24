function loadingBar(number=Number) {
    const decimalsFromNumber = number / 10;

    const decimalsText = '%'.repeat(decimalsFromNumber);
    const dotsText = '.'.repeat(10 - decimalsFromNumber);

    if (decimalsText.length === 10) {
        console.log(`${number}% [${decimalsText}${dotsText}]`);
        console.log('Complete!');
    } else {
        console.log(`${number}% [${decimalsText}${dotsText}]`);
        console.log('Still loading...');
    }

    
}


loadingBar(30);
loadingBar(50);
loadingBar(100);

// Variant 2
function loadingBar(n) {
    const bar = '%'.repeat(n / 10) + '.'.repeat(10 - n / 10);
    console.log(`${n}% [${bar}] ${n === 100 ? 'Complete!' : 'Still loading...'}`);
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
