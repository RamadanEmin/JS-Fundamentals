function sequences(input) {
    let output = [];
    input = input
        .map(JSON.parse)
        .map(el => el.sort((a, b) => b - a));
    for (let i = 0; i < input.length; i++) {
        let currentArr = input[i];
        let isUnique = true;
        for (let j = 0; j < output.length; j++) {
            let nextArr = output[j];
            if (currentArr.toString() === nextArr.toString()) {
                isUnique = false;
            }
        }
        if (isUnique) {
            output.push(currentArr);
        }
    }
    output.sort((a, b) => a.length - b.length);
    for (const arr of output) {
        console.log(`[${arr.join(', ')}]`)
    }
}
sequences(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);