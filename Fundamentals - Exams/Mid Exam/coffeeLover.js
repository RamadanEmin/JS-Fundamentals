function coffeeLover(input = []) {
    let coffees = input.shift().slice().split(' ');
    let numberOfCommands = Number(input.shift());
    for (let i = 0; i < numberOfCommands; i++) {
        let commands = input.shift();
        let [command, param1, param2] = commands.split(' ').filter(x => x !== '');
        param2 = Number(param2);
        switch (command) {
            case 'Include':
                coffees.push(param1);
                break;
            case 'Remove':
                if (coffees.length >= param2) {
                    if (param1 === 'first') {
                        coffees.splice(0, param2);
                    } else if (param1 === 'last') {
                        coffees.splice(-param2);
                    }
                }
                break;
            case 'Prefer':
                param1 = Number(param1);
                if (coffees[param1] && coffees[param2]) {
                    let temp = 0;
                    temp = coffees[param1];
                    coffees[param1] = coffees[param2];
                    coffees[param2] = temp;
                }
                break;
            case 'Reverse':
                coffees.reverse();
                break;
        }
    }
    console.log(`Coffees:\n${coffees.join(' ')}`);
}
coffeeLover([
    "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]);
coffeeLover([
    "Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"]);
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"]);