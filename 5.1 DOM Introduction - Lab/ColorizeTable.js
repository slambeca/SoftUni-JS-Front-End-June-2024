// function colorize() {
//     const tableElement = document.querySelector('table tbody');
//     const tableRowElements = tableElement.children;

//     for (let i = 0; i < tableRowElements.length; i += 2) {
//         tableRowElements[i].style.backgroundColor = 'teal';
//     }
// }

// Variant 2
function colorize() {
    const evenTableRowElements = document.querySelectorAll('table tbody tr:nth-child(2n + 1)'); 

    for (const trElement of evenTableRowElements) {
        trElement.style.backgroundColor = 'teal';
    }
}

// Variant 3 (only this works in Judge)
function colorize() {
    let addColorElements = document.querySelectorAll('tr');
    for (i=1; i<addColorElements.length; i+=2) {
        addColorElements[i].style.background = 'teal';
    }
}
