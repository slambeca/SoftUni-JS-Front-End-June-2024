function subtract() {
    
    const firstValue = document.getElementById('firstNumber').value;
    const secondValue = document.getElementById('secondNumber').value;
    const resultField = document.getElementById('result');

    resultField.textContent = Number(firstValue) - Number(secondValue);
}
