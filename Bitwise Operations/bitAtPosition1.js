function bitAtPosition1(num) {
    let shiftedNumber = num >> 1;
    let result = shiftedNumber & 1;
    console.log(result);
}
bitAtPosition1(51);