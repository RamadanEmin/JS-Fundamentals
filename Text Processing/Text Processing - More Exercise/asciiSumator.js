function asciiSumator(input = []) {
    let startSymbol = input[0].charCodeAt();
    let endSymbol = input[1].charCodeAt();
    let string = input[2];
    let sum = 0;
    if (endSymbol - startSymbol < 0) {
        let temp = startSymbol;
        startSymbol = endSymbol;
        endSymbol = temp;
    }
    for (let i = 0; i < string.length; i++) {
        if (startSymbol < string[i].charCodeAt() && string[i].charCodeAt() < endSymbol) {
            sum += string[i].charCodeAt();
        }
    }
    return sum;
}
console.log(asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']));
