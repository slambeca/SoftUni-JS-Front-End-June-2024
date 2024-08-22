function circleArea(input) {
    let result;

    const inputType = typeof(input);

    if (inputType === 'number') {
        result = input ** 2 * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`); 
    }
}

circleArea(5);
circleArea('name');

// Variant 2
function calculateCircleArea(value) {
    let area;

    const valueType = typeof value;

    if (valueType === 'number') {
        area = Math.PI * value ** 2;
        console.log(area.toFixed(2));
    } else {
        console.log(`Unable to compute the circle area because the provided input is of type ${valueType}.`);
    }
}

calculateCircleArea(5);
calculateCircleArea('name');
