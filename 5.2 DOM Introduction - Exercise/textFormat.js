function solve() {
  const inputEl = document.getElementById('input').value;
  const outputEl = document.getElementById('output');

  function createParagraphEl(text) {
    const pEl = document.createElement('p');
    pEl.textContent = text;

    return pEl;

  }

  outputEl.innerHTML = '';

  const sentences = inputEl.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);

  for (let i = 0; i < sentences.length; i += 3) {
    const currentText = sentences.slice(i, i + 3).join(' ').concat('.');
    const currentParagraph = createParagraphEl(currentText);
    outputEl.appendChild(currentParagraph);
  }
}
