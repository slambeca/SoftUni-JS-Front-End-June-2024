function toggle() {
    const buttonEl = document.querySelector('.head span.button');

    const extraEl = document.querySelector('#extra');

    if (extraEl.style.display === 'none') {
        extraEl.style.display = 'block';
        buttonEl.textContent = 'Less';
    } else {
        extraEl.style.display = 'none';
        buttonEl.textContent = 'More';
    }

}
