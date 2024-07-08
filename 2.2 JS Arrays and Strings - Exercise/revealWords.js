function revealWords(words, template) {
    const specialWords = words.split(', ');
    const newTemplate = template.split(' ');

    for(let currentWordWords of specialWords) {
        for(let i = 0; i < newTemplate.length; i++) {
            if (newTemplate[i].length === currentWordWords.length && newTemplate[i].startsWith('*') ) {
                newTemplate[i] = currentWordWords;
            }
        }
    }

    console.log(newTemplate.join(' '));
}

revealWords('great', 'Softuni is ***** place for learning new programming languages');
revealWords('great, learning','softuni is ***** place for ******** new programming languages');