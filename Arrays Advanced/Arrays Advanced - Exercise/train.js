function train(input = []) {
    let wagons = input.shift().split(` `).map(x => Number(x));
    let maxCapacity = + input.shift();
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(` `);
        if (command.length === 2) {
            let addNumber = Number(command[1]);
            wagons.push(addNumber);
        } else if (command.length === 1) {
            let passengersToAdd = Number(command[0]);
            /*   wagons.map(x => {
                   if (x + passengersToAdd <= maxCapacity) {
                       return x += passengersToAdd;
                   }
                   return x;
               });                                         */
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengersToAdd <= maxCapacity) {
                    wagons[j] += passengersToAdd;
                    break;
                }
            }
        }
    }
    return wagons.join(` `);
}
console.log(train(
    ['0 0 0 10 2 4',
        '10',
        'Add 10',
        '10',
        '10',
        '10',
        '8',
        '6']
)); 
