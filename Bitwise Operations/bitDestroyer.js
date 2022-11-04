function bitDestroyer(num, position) {
    let shiftedNumber = 1 << position;
    let mask = ~shiftedNumber;
    let result = num & mask;
    console.log(result);
}
bitDestroyer(111, 6);