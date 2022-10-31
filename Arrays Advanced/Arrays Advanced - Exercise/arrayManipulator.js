function arrayManipulator(arr = [], commands = []) {
    function add(array, tokens) {
        array.splice(+tokens[0], 0, +tokens[1])
        return array;
    }
    function addMany(array, tokens) {
        let index = +tokens.shift();
        for (let value of tokens) {
            array.splice(index++, 0, value);
        }
        return array;
    }
    function remove(array, tokens) {
        array.splice(+tokens[0], 1);
        return array;
    }
    function shift(array, tokens) {
        let position = +tokens[0];
        while (position > 0) {
            let element = array.shift();
            array.push(element);
            position--;
        }
        return array;
    }
    function sumPairs(array) {
        let output = [];
        while (array.length > 0) {
            let a = +array.shift() || 0;
            let b = +array.shift() || 0;
            output.push(a + b);
        }
        return output;
    }

    let currCommand = commands.shift();
    while (currCommand !== `print`) {
        let tokens = currCommand.split(` `);
        let command = tokens.shift();
        switch (command) {
            case `add`:
                arr = add(arr, tokens);
                break;
            case `addMany`:
                arr = addMany(arr, tokens);
                break;
            case `contains`:
                console.log(arr.indexOf(Number(tokens[0])));
                break;
            case `remove`:
                arr = remove(arr, tokens);
                break;
            case `shift`:
                arr = shift(arr, tokens);
                break;
            case `sumPairs`:
                arr = sumPairs(arr);
                break;
        }
        currCommand = commands.shift();
    }
    return `[ ${arr.join(`, `)} ]`;
}
console.log(arrayManipulator(
    [2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]
));
