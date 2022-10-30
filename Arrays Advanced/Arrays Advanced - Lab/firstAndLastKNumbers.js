function firstAndLastKNumbers(arr = []) {
    let firstElement = arr.shift();
    let firstNumber = arr.slice(0, firstElement);
    let lastNumber = arr.slice(arr.length - firstElement, arr.length);
    console.log(firstNumber.join(` `));
    console.log(lastNumber.join(` `));
}
firstAndLastKNumbers([2, 7, 8, 9]);