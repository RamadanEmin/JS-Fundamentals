function printAndSum(num1, num2) {
    let sum = 0;
    let buf = "";
    for (let i = num1; i <= num2; i++) {
        sum += i;
        buf += "" + i + " ";
    }
    console.log(buf);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)