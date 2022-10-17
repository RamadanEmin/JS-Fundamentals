function condenseArrayToNumber(numbersInput) {
    let numbers = numbersInput;

    for (let j = 0; j < numbers.length; j++) {
        numbers[j] = Number(numbers[j]);
    }
    while (numbers.length > 1) {
        let condensed = [];
        for (let i = 0; i < numbers.length - 1; i++) {
            condensed[i] = numbers[i] + numbers[i + 1];
        }
        numbers = condensed;
    }
    console.log(numbers[0]);
}
condenseArrayToNumber([5, 0, 4, 1, 2]);
