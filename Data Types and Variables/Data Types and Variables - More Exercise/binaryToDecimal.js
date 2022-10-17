function binaryToDecimal(binaryNumber) {
    binaryNumber = "" + binaryNumber;
    let power = binaryNumber.length - 1;
    let decimal = 0;
    for (let i = 0; i < binaryNumber.length; i++) {
        decimal += Number(binaryNumber[i]) * Math.pow(2, power);
        power--;
    }
    console.log(decimal);
}
binaryToDecimal(00000011);





