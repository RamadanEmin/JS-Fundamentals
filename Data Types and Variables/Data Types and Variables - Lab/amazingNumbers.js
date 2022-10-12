function amazingNumbers(num) {
    let number = num;
    let sum = 0;
    while (number > 0) {
        let digit = number % 10;
        sum += digit;
        number = Math.trunc(number / 10);
    }
    if (sum.toString().includes(9)) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(1233);
