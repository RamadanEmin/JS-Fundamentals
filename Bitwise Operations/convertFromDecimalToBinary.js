function convertFromDecimalToBinary(num) {
    let result = ``;
    while (num > 0) {
        result = (num % 2) + result;
        num = Math.trunc(num / 2);
    }
    console.log(result);
}
convertFromDecimalToBinary(11);