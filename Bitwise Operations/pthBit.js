function pthBit(num, digit) {
    let shiftedNumber = num >> digit;
    let result = shiftedNumber & 1;
    console.log(result);
}
pthBit(255, 7);