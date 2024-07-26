function calc() {
    debugger;
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const sumElement = document.getElementById('sum');

    const sumElements = parseInt(num1Element.value) + parseInt(num2Element.value);

    sumElement.value = sumElements;
}
