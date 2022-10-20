function sumFirstAndLastArrayElements(input) {
    let firstNumber = input[0];
    let lastNumber = input[input.length - 1];
    let sum = firstNumber + lastNumber;
    console.log(sum);
}
sumFirstAndLastArrayElements([10, 17, 22, 33]);