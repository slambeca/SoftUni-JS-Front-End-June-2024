function pascalCaseSplitter(string) {
    const regPattern = /([A-z][a-z]*)/g;

    let matches = string.matchAll(regPattern);
    let output = [];

    for(const match of matches) {
        output.push(match[0]);
    }

    console.log(output.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');