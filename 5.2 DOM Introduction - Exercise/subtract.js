function subtract() {

    const firstValue = document.getElementById('firstNumber').value;
    const secondValue = document.getElementById('secondNumber').value;
    const resultField = document.getElementById('result');

    resultField.textContent = Number(firstValue) - Number(secondValue);
}

// Variant 2
function subtract() {

    const [firstElement, secondElement] = document.querySelectorAll('input[type="text"]');

    document.getElementById('result').textContent = Number(firstElement.value) - Number(secondElement.value);
}
