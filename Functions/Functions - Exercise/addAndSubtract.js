function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    let resultSum = sum(firstNumber, secondNumber);
    let result = subtract(resultSum, thirdNumber);
    console.log(result);
}
addAndSubtract(1, 17, 30);
