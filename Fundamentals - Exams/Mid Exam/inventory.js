function inventory(collecting = []) {
    let collectingItems = collecting.shift().split(`, `);
    let commands = collecting.shift();
    while (commands !== `Craft!`) {
        let token = commands.split(` - `);
        let command = token[0];
        let item = token[1];
        let index = collectingItems.indexOf(item);
        switch (command) {
            case `Collect`:
                if (index < 0) {
                    collectingItems.push(item);
                }
                break;
            case `Drop`:
                if (index >= 0) {
                    collectingItems.splice(index, 1);
                }
                break;
            case `Combine Items`:
                let newItem = item.split(`:`);
                let combineItem = newItem[1];
                index = collectingItems.indexOf(newItem[0]);
                if (index >= 0) {
                    collectingItems.splice(index + 1, 0, combineItem);
                }
                break;
            case `Renew`:
                if (index >= 0) {
                    let correctItem = collectingItems.splice(index, 1);
                    collectingItems.push(correctItem);
                }
                break;
        }
        commands = collecting.shift();
    }
    console.log(collectingItems.join(`, `));
}
inventory(
    ['Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!']
);