function edit(element, match, replacer) {
    element.textContent = element.textContent.replace(new RegExp(match, 'g'), replacer);
}

// Variant 2
function edit(element, match, replacer) {
    element.textContent = element.textContent.replaceAll(match, replacer);
}
