function replaceRepeatingChars(string = '') {
    let letter = string.split('');
    let newString = '';
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] !== letter[i + 1]) {
            newString += letter[i];
        }
    }
    return newString;
    // return string.split('').filter((ch, i, arr) => ch !== arr[i + 1]).join('');
}
console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'));