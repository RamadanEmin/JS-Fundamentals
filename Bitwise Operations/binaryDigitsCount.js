function binaryDigitsCount(num, digit) {
    let binary = num.toString(2);
    let counter = 0;
    for (let i = 0; i < binary.length; i++) {
        let currentDigit = Number(binary[i]);
        if (currentDigit === digit) {
            counter++;
        }
    }
    console.log(counter);
}
binaryDigitsCount(10, 0);
