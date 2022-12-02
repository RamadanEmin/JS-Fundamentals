function lettersChangeNumbers(input = '') {
    input = input.split(/\s+/);
    let result = 0;
    for (const value of input) {
        let sum = 0;
        let firstLetter = value.substring(0, 1);
        let LastLetter = value.slice(value.length - 1);
        let number = value.slice(1, value.length - 1);
        if (firstLetter === firstLetter.toUpperCase()) {
            sum = number / (value.charCodeAt(0) - 64);
        } else {
            sum = number * (value.charCodeAt(0) - 96);
        }
        if (LastLetter === LastLetter.toUpperCase()) {
            sum -= (value.charCodeAt(value.length - 1) - 64);
        } else {
            sum += (value.charCodeAt(value.length - 1) - 96);
        }
        result += sum;
    }
    return result.toFixed(2);
}
console.log(lettersChangeNumbers('P34562Z q2576f   H456z'));