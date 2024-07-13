function signCheck(first, second, third) {
    const multiply = (a, b) => a * b;

    if ((multiply(first, second) >= 0 && third >= 0) || multiply(first, second) < 0 && third < 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(45, -8, -1);
