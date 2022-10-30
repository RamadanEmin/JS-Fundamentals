function arrayManipulations(input = []) {
    let arr = input.shift().split(` `).map(Number);

    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(` `).filter(x => x !== ``);
        let command = token[0];
        switch (command) {
            case `Add`:
                let numberToAdd = Number(token[1]);
                arr.push(numberToAdd);
                break;
            case `Remove`:
                let numberToRemove = Number(token[1]);
                arr = arr.filter(x => x !== numberToRemove);
                break;
            case `RemoveAt`:
                let index = Number(token[1]);
                arr.splice(index, 1);
                break;
            case `Insert`:
                let numberToInsert = Number(token[1]);
                let index2 = Number(token[2]);
                arr.splice(index2, 0, numberToInsert);
                break;
        }
    }
    console.log(arr.join(` `));
}
arrayManipulations(
    ['6 12 2 65 6 42',
        'Add 8',
        'Remove 12',
        'RemoveAt 3',
        'Insert 6 2']);
