function muOnline(input = ``) {
    let health = 100;
    let bitcoins = 0;
    let bestRoom = 0;
    let dungeonsRooms = input.split(`|`).slice();
    let isDied = false;
    for (const room of dungeonsRooms) {
        if (isDied) {
            break;
        }
        let token = room.split(` `);
        let command = token[0];
        let value = Number(token[1]);
        switch (command) {
            case `potion`:
                if (health + value > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${value} hp.`);
                    health += value;
                }
                console.log(`Current health: ${health} hp.`);
                bestRoom++;
                break;
            case `chest`:
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                bestRoom++;
                break;
            default:
                health -= value;
                if (health > 0) {
                    bestRoom++;
                    console.log(`You slayed ${command}.`);
                } else {
                    isDied = true;
                    bestRoom++;
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${bestRoom}`);
                }
                break;
        }
    }
    if (!isDied) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");