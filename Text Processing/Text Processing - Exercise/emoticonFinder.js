function emoticonFinder(text = '') {
    text = text.split(' ');
    for (const word of text) {
        if (word.length === 2 && word[0] === ':') {
            console.log(word);
        }
    }
}
emoticonFinder('There ara so many emoticons nowodays :P I hava many ideas :O what input to place here  :)')