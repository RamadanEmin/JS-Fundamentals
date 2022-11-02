function sorting(input = []) {
    let output = [];
    let sorted = input.slice().sort((a, b) => b - a);
    while (sorted.length > 0) {
        output.push(sorted.shift());
        output.push(sorted.pop());
    }
    console.log(output.join(` `));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);