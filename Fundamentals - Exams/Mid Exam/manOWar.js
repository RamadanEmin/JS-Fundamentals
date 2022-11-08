function manOWar(input = []) {
    let pirateShip = input.shift().split(`>`).map(Number);
    let warship = input.shift().split(`>`).map(Number);
    let maximumHealth = Number(input.shift());
    let commands = input.shift();
    while (commands !== `Retire`) {
        let tokens = commands.split(` `);
        let command = tokens.shift();
        switch (command) {
            case `Fire`:
                let fireIndex = Number(tokens[0]);
                if (0 <= fireIndex && fireIndex < warship.length) {
                    warship[fireIndex] -= Number(tokens[1]);
                    if (warship[fireIndex] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;
            case `Defend`:
                let startIndex = Number(tokens[0]);
                let endIndex = Number(tokens[1]);
                if (0 <= startIndex && endIndex < pirateShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= tokens[2];
                        if (pirateShip[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
                break;
            case `Repair`:
                let repairIndex = Number(tokens[0]);
                if (0 <= repairIndex && repairIndex < pirateShip.length) {
                    if (pirateShip[repairIndex] + Number(tokens[1]) > maximumHealth) {
                        pirateShip[repairIndex] = maximumHealth;
                    } else {
                        pirateShip[repairIndex] += Number(tokens[1]);
                    }
                }
                break;
            case `Status`:
                let count = 0;
                for (const ship of pirateShip) {
                    if (ship < maximumHealth * 0.20) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
        }
        commands = input.shift()
    }
    let pirateShipSum = pirateShip.reduce((a, b) => a + b, 0);
    let warshipSum = warship.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${pirateShipSum}
Warship status: ${warshipSum}`);
}
manOWar(
    ["12>13>11>20>66",
        "12>22>33>44>55>32>18",
        "70",
        "Fire 2 11",
        "Fire 8 100",
        "Defend 3 6 11",
        "Defend 0 3 5",
        "Repair 1 33",
        "Status",
        "Retire"]);