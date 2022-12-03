function stringSubstring(word = '', text = '') {
    word = word.toLowerCase();
    text = text.toLowerCase().split(' ');
    // let foundMatch = false;
    // for (const w of text) {
    //     if (w === word) {
    //         foundMatch = true;
    //         console.log(word);
    //         break;
    //     }
    // }
    // if (!foundMatch) {
    //     console.log(`${word} not found!`);
    // }
    return text.includes(word) ? word : `${word} not found!`;
}
console.log(stringSubstring('javascript', 'JavaScript is the best programming language'));