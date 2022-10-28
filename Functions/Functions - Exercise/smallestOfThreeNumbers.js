function smallestOfThreeNumbers(firstNumber, secondNumber, thirdNumber) {
    let minimum = thirdNumber;
    if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
        minimum = firstNumber;
    } else if (secondNumber <= firstNumber && secondNumber <= thirdNumber) {
        minimum = secondNumber;
    }
    console.log(minimum);
}
smallestOfThreeNumbers(600, 342, 123);