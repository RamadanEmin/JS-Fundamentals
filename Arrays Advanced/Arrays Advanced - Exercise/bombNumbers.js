function bombNumbers(arr = [], bomb = []) {
    let output = arr.slice(0);
    let bombNumber = bomb[0];
    let bombRadius = bomb[1];
    while (output.includes(bombNumber)) {
        let bombIndex = output.indexOf(bombNumber);
        let startIndex = Math.max(bombIndex - bombRadius, 0);
        output.splice(bombIndex, bombRadius + 1);
        output.splice(startIndex, bombRadius);
    }
    sum = 0;
    for (let i = 0; i < output.length; i++) { 
        sum += output[i];
    }
    return sum;
}
console.log(bombNumbers(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3]
));