function checkGrade(number) {
    if (number >= 5.50) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }
}

checkGrade(7);

// Variant 2
function checkGrade(number) {
    console.log(number >= 5.50 ? 'Excellent' : 'Not excellent');
}
