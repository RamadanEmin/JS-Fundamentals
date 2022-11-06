function triBitSwitch(num, position) {
    let mask = 7 << position;
    let result = num ^ mask;
    console.log(result);
}
triBitSwitch(44444, 4);