function printNxNMatrix(number) {
    for (let i = 0; i < number; i++) {
        let row = '';

        for (let j = 0; j < number; j++) {
            row += `${number} `;
        }

        console.log(row.trim());
        
    }
}


printNxNMatrix(7);


// Variant 2
function printMatrix(number) {
    for (let i = 0; i < number; i++) {
        console.log(`${number} `.repeat(number));
    }
}

printMatrix(2);
