function shoppingList(input = []) {
    let groceries = input.shift().slice().split(`!`);
    let commands = input.shift();
    while (commands !== `Go Shopping!`) {
        let command = commands.split(` `);
        let item = command[1];
        let index = groceries.indexOf(item);
        switch (command[0]) {
            case 'Urgent':
                if (index < 0) {
                    groceries.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (index >= 0) {
                    groceries.splice(index, 1);
                }
                break;
            case 'Correct':
                if (index >= 0) {
                    groceries.splice(index, 1, command[2]);
                }
                break;
            case 'Rearrange':
                if (index >= 0) {
                    groceries.splice(index, 1);
                    groceries.splice(groceries.length, 0, item);
                }
                break;
        }
        commands = input.shift();
    }
    console.log(groceries.join(`, `));
}
shoppingList(
    ["Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"]);