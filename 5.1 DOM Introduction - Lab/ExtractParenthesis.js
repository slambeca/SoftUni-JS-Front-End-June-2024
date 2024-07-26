function extract(content) {
    const contentElement = document.getElementById('content');
    const pattern = /\(([^()]+)\)/g;

    const matches = contentElement.textContent.matchAll(pattern);

    let result = [];

    for (const match of matches) {
        result.push(match[1]);
    }

    return result.join(';');
}
