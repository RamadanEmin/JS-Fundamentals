function valueOfAString(input = []) {
    let string = input[0];
    let command = input[1];
    let sum = 0;
    if (command === 'UPPERCASE') {
        for (i = 0; i < string.length; i++) {
            if (string[i].toUpperCase() === string[i] &&
                (65 <= string.charCodeAt(i) && string.charCodeAt(i) <= 90)) {
                sum += string.charCodeAt(i)
            }
        }
    } else if (command === 'LOWERCASE') {
        for (i = 0; i < string.length; i++) {
            if (string[i].toLowerCase() === string[i] &&
                (97 <= string.charCodeAt(i) && string.charCodeAt(i) <= 122)) {
                sum += string.charCodeAt(i)
            }
        }
    }
    return `The total sum is: ${sum}`;
}
console.log(valueOfAString(['AC/DC','UPPERCASE']));