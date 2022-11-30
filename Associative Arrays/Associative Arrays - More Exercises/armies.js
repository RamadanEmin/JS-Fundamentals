function armies(input = []) {
    let armies = {};
    for (const line of input) {
        if (line.includes(`arrives`)) {
            let index = line.indexOf(`arrives`);
            let leader = line.slice(0, index).trim();
            if (!armies.hasOwnProperty(leader)) {
                armies[leader] = {
                    army: {},
                    totalArmyCount: 0
                };
            }
        } else if (line.includes(`:`)) {
            let [leader, armyInfo] = line.split(`: `);
            let tokens = armyInfo.split(`, `);
            let armyName = tokens[0];
            let armyCount = Number(tokens[1]);
            if (armies.hasOwnProperty(leader)) {
                armies[leader][`army`][armyName] = armyCount;
                armies[leader].totalArmyCount += armyCount;
            }
        } else if (line.includes(`+`)) {
            let [armyName, armyCount] = line.split(` + `);
            armyCount = Number(armyCount);
            for (const leader in armies) {
                if (armies[leader][`army`].hasOwnProperty(armyName)) {
                    armies[leader][`army`][armyName] += armyCount;
                    armies[leader].totalArmyCount += armyCount;
                }
            }
        } else if (line.includes(`defeated`)) {
            let index = line.indexOf(`defeated`);
            let leader = line.slice(0, index).trim();
            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
            }
        }
    }
    let sortedArmies = Object.entries(armies).sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount);
    for (const [leader, armies] of sortedArmies) {
        console.log(`${leader}: ${armies.totalArmyCount}`);
        let sortedArmy = Object.entries(armies[`army`]).sort((a, b) => b[1] - a[1]);
        for (const [armyName, armyCount] of sortedArmy) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }
}
armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);
