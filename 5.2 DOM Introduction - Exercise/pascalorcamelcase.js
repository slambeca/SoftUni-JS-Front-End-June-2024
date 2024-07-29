function solve() {

  const validNamingConventions = ['Camel Case', 'Pascal Case'];

  const textLabelEl = document.querySelector('#text');
  const namingConventionEl = document.querySelector('#naming-convention');
  const resultEl = document.querySelector('.result-container #result');

  if (!validNamingConventions.includes(namingConventionEl.value)) {
    resultEl.textContent = 'Error!';
    return;
  }

  const pascalCaseText = textLabelEl.value.toLowerCase()
    .split(' ')
    .map((x) => x[0].toUpperCase()
      .concat(x.slice(1))).join('');

  
  if (namingConventionEl.value === 'Camel Case') {
    resultEl.textContent = pascalCaseText[0].toLowerCase().concat(pascalCaseText.slice(1));
  } else {
    resultEl.textContent = pascalCaseText;
  }


}

// Variant 2
function solve() {
  const inputText = document.getElementById('text').value;
  const caseType = document.getElementById('naming-convention').value;
  const resultElement = document.getElementById('result');

  function toCamelCase(text) {
      return text.toLowerCase().split(' ').map((word, index) => {
          if (index === 0) {
              return word;
          }
          return word.charAt(0).toUpperCase() + word.slice(1);
      }).join('');
  }

  function toPascalCase(text) {
      return text.toLowerCase().split(' ').map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
      }).join('');
  }

  let result;
  if (caseType === "Camel Case") {
      result = toCamelCase(inputText);
  } else if (caseType === "Pascal Case") {
      result = toPascalCase(inputText);
  } else {
      result = "Error!";
  }

  resultElement.textContent = result;
}
