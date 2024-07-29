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
