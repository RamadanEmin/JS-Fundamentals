function sortNumbers(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    let result = numbers.sort((a, b) => a - b);
    console.log(result.reverse().join(`\n`));
}
sortNumbers(2,0,7)