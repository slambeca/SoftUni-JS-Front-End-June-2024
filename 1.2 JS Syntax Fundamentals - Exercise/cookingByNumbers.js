function cookingByNumbers(number, ...operations) {
    let currentNumber = number;

    for (const operation of operations) {
        if (operation === 'chop') {
            currentNumber /= 2;
            console.log(currentNumber);
        } else if (operation === 'dice') {
            currentNumber = Math.sqrt(currentNumber);
            console.log(currentNumber);
        } else if (operation === 'spice') {
            currentNumber += 1;
            console.log(currentNumber);
        } else if (operation === 'bake') {
            currentNumber *= 3;
            console.log(currentNumber);
        } else if (operation === 'fillet') {
            currentNumber *= 0.8;
            console.log(currentNumber.toFixed(1));
        }

    }
    
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');