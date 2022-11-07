function arrayModifier(input) {
    let initialArray = input[0].split(' ').map(Number);
    for (let i = 1; i < input.length; i++) {
        let [command, index1, index2] = input[i].split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        if (command === 'swap') {
            let first = initialArray[index1];
            let second = initialArray[index2];
            initialArray[index1] = second;
            initialArray[index2] = first;
        }
        if (command === 'multiply') {
            let first = initialArray[index1];
            let second = initialArray[index2];
            initialArray[index1] = first * second;
        }
        if (command === 'decrease') {
            initialArray = initialArray.map(el => el - 1);
        }
    }
    return initialArray.join(', ');
}
console.log(arrayModifier(
    ['1 2 3 4',
        'swap 0 1',
        'swap 1 2',
        'swap 2 3',
        'multiply 1 2',
        'decrease',
        'end']     
));
