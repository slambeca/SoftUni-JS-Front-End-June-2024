function substringFromAString(string, startIndex, count) {
    console.log(string.substring(startIndex, startIndex+count));
}

substringFromAString('ASentence', 1, 8);
substringFromAString('SkipWord', 4, 7);

// Variant 2
const substringFromAString = (s, i, c) => console.log(s.substr(i, c));

substringFromAString('ASentence', 1, 8);
substringFromAString('SkipWord', 4, 7);
