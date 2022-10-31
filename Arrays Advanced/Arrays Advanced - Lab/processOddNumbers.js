function processOddNumbers(input = []) {
    let oddNumbers = input
    .filter((arr,index) => index % 2 === 1)
    .map(x=>x*2)
    .reverse();
    console.log(oddNumbers.join(` `));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);