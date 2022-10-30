function negativeOrPositiveNumbers(arr = []) {
    let array = [];
    for (let element of arr) {
        if (element >= 0) {
            array.push(element);
        } else {
            array.unshift(element);
        }
    }
    console.log(array.join(`\n`));
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);