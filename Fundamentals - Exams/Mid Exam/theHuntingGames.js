function theHuntingGames(input = []) {
    let days = Number(input.shift());
    let numberOfPlayers = Number(input.shift());
    let groupsEnergy = Number(input.shift());
    let waterPerDay = Number(input.shift());
    let foodPerDay = Number(input.shift());
    let LossEnergyPerDay = input.map(Number);
    let water = days * waterPerDay * numberOfPlayers;
    let food = days * foodPerDay * numberOfPlayers;
    let day = 1;
    let isAchieved = true;
    for (let i = 0; i < days; i++) {
        groupsEnergy -= LossEnergyPerDay[i];
        if (groupsEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
            isAchieved = false;
            break;
        }
        if (day % 2 === 0) {
            groupsEnergy *= 1.05;
            water *= 0.70;
        }
        if (day % 3 === 0) {
            food -= (food / numberOfPlayers);
            groupsEnergy *= 1.10;
        }
        day++;
    }
    if (isAchieved) {
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
    }
}
theHuntingGames(['10', '7', '5035.5', '11.3', '7.2', '942.3', '500.57', '520.68', '540.87', '505.99', '630.3', '784.20', '321.21', '456.8', '330',])
theHuntingGames(["12", "6", "4430", "9.8", "5.5", "620.3", "840.2", "960.1", "220", "340", "674", "365", "345.5", "212", "412.12", "258", "496"])