function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let number = i;
        for (let j = 0; j < i.toString().length; j++) {
            sum += number % 10;
            number = Math.trunc(number / 10);
        }
        if (sum  === 5 || sum  === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(20);