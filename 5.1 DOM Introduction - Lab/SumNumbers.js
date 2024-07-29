function calc() {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const sumElement = document.getElementById('sum');

    const sumElements = parseInt(num1Element.value) + parseInt(num2Element.value);

    sumElement.value = sumElements;
}


// Variant 2
function calc() {
    const firstElement = document.getElementById('num1');
    const secondElement = document.getElementById('num2');
    const sumElement = document.getElementById('sum');

    const sumOfElements = Number(firstElement.value) + Number(secondElement.value);

    sumElement.value = sumOfElements;
}
