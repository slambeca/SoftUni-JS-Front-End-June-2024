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

// Variant 2
function toggle() {
    const buttonEl = document.querySelector('.head span.button');
    const extraEl = document.getElementById('extra');

    const isHidden = extraEl.style.display === 'none';

    extraEl.style.display = isHidden ? 'block' : 'none';
    buttonEl.textContent = isHidden ? 'Less' : 'More';
}
