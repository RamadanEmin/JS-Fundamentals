function convertFromBinaryToDecimal(input = ``) {
    let result = 0;
    let position = 0;
    for (let i = input.length - 1; i >= 0; i--) {
        let currentDigit = Number(input[i]);
        result += currentDigit * Math.pow(position, 2);
        position++;
    }
    console.log(result);
}
convertFromBinaryToDecimal(`1010`);