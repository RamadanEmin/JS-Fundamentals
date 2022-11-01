function distinctArray(input = []) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        if (!output.includes(input[i])) {
            output.push(input[i]);
        }
    }
    return output.join(` `);
}
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));