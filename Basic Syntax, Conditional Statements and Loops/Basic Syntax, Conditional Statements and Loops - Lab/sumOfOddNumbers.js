function sumOfOddNumbers(num) {
    let sum = 0;
    let counter = 0;
    let currentCounter = 1;
    while (num > counter) {
        if (currentCounter % 2 !== 0) {
            console.log(currentCounter);
            sum += currentCounter;
            counter++
        }
        currentCounter++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);