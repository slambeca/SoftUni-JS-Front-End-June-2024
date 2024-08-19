function ageCheck(age) {
    let result;

    if (age >= 0 && age <= 2) {
        result = 'baby';
    } else if (age >= 3 && age <= 13) {
        result = 'child';
    } else if (age >= 14 && age <= 19) {
        result = 'teenager';
    } else if (age >= 20 && age <= 65) {
        result = 'adult';
    } else if (age >= 66) {
        result = 'elder';
    } else {
        result = 'out of bounds';
    }

    console.log(result);
}

ageCheck(-1)

// Variant 2
function ageCheck(age) {
    const result = age < 0 ? 'out of bounds' :
                   age <= 2 ? 'baby' :
                   age <= 13 ? 'child' :
                   age <= 19 ? 'teenager' :
                   age <= 65 ? 'adult' :
                   'elder';

    console.log(result);
}

ageCheck(-1);  
