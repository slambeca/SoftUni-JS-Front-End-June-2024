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
