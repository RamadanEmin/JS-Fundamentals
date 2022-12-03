function revealWords(word, text) {
    let words = word.split(', ').sort((a, b) => b.length - a.length);
    for (const word of words) {
        let hiddenWord = '*'.repeat(word.length);
        text = text.replace(hiddenWord, word);
    }
    return text;
}
console.log(revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
));