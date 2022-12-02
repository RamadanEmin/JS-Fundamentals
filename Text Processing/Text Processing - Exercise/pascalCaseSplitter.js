function pascalCaseSplitter(input = '') {
    let capitalIndex = 0;
    let output = [];
    for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        if (letter.toLowerCase() !== letter && i !== 0) {
            let word = input.substring(capitalIndex, i);
            output.push(word);
            capitalIndex = i;
        }
    }
    output.push(input.substring(capitalIndex))
    return output.join(', ');
    // return input.match(/[A-Z][a-z]*/g).join(', ');
}
console.log(pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'));