function treasureHunt(input = []) {
    let treasureChest = input.shift().split(`|`);
    let commands = input.shift();
    let stolenItems = [];
    let chestSum = 0;
    while (commands !== `Yohoho!`) {
        let token = commands.split(` `);
        let command = token.shift();
        switch (command) {
            case `Loot`:
                for (const item of token) {
                    if (typeof item === "string") {
                        let index = treasureChest.indexOf(item);
                        if (index < 0) {
                            treasureChest.unshift(item);
                        }
                    }
                }
                break;
            case `Drop`:
                let index = Number(token);
                if (0 <= index && index < treasureChest.length) {
                    treasureChest.push(treasureChest.splice(index, 1));
                }
                break;
            case `Steal`:
                let steal = Number(token);
                if (steal > treasureChest.length) {
                    steal = treasureChest.length;
                }
                stolenItems = treasureChest.splice(-steal);
                console.log(stolenItems.join(`, `));
                break;
        }
        commands = input.shift();
    }
    for (let i = 0; i < treasureChest.length; i++) {
        let length = treasureChest[i].length;
        chestSum += length;
    }
    if (treasureChest.length) {
        console.log(`Average treasure gain: ${(chestSum / treasureChest.length).toFixed(2)} pirate credits.`);

    } else {
        console.log("Failed treasure hunt.");
    }
}
treasureHunt(
    ["Diamonds|Silver|Shotgun|Gold",
        "Loot Silver Medals Coal",
        "Drop -1",
        "Drop 1",
        "Steal 6",
        "Yohoho!"]);