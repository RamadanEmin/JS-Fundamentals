function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }
    for (let item of array) {
        if (item % 2 === 0) {
            sum += item;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['2','4','6','8','10']);