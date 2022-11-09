function numbers(input) {
    let arr = input.split(` `).sort((a, b) => b - a).map(Number);
    let sum = arr.reduce((a, b) => a + b);
    let average = sum / arr.length;
    let counter = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            counter++;
            result.push(arr[i]);
        }
        if (counter === 5) {
            break;
        }
    }
    if(result.length<1){
        console.log(`No`);
    }
    console.log(result.join(` `));
}
numbers('-1 -2 -3 -4 -5 -6');