function numbers(input) {
    let sequenceNum = input.shift().slice().split(' ').map(Number);
    let commands = input.shift();
    while (commands !== 'Finish') {
        let [command, param1, param2] = commands.split(' ').filter(x => x !== '');
        param1 = Number(param1);
        switch (command) {
            case 'Add':
                sequenceNum.push(param1);
                break;
            case 'Remove':
                if (sequenceNum.includes(param1)) {
                    let index = sequenceNum.indexOf(param1);
                    sequenceNum.splice(index, 1);
                }
                break;
            case 'Replace':
                if (sequenceNum.includes(param1)) {
                    param2 = Number(param2);
                    let index = sequenceNum.indexOf(param1);
                    sequenceNum.splice(index, 1, param2);
                }
                break;
            case 'Collapse':
                sequenceNum.filter(x => x >= param1);
                break;
        }
        commands = input.shift();
    }
    console.log(sequenceNum.join(' '));
}
numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
numbers(["1 20 -1 10", "Collapse 8", "Finish"]);