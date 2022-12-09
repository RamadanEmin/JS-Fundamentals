function pirates(input = []) {
    let cities = {};
    let commands = {
        Plunder: (town, people, gold) => {
            people = Number(people);
            gold = Number(gold);
            cities[town].population -= people;
            cities[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        },
        Prosper: (town, gold) => {
            gold = Number(gold);
            if (gold > 0) {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            } else {
                console.log("Gold added cannot be a negative number!");
            }
        }
    };
    while (input[0] !== 'Sail') {
        let [town, population, gold] = input.shift().split('||');
        population = Number(population);
        gold = Number(gold);
        if (!cities.hasOwnProperty(town)) {
            cities[town] = { population, gold };
        } else {
            cities[town].population += population;
            cities[town].gold += gold;
        }
    }
    input.shift()
    while (input[0] !== 'End') {
        let [command, paramOne, paramTwo, paramThree] = input.shift().split('=>');
        commands[command](paramOne, paramTwo, paramThree);
    }
    let wealthySettlements = Object.entries(cities).length;
    if (wealthySettlements > 0) {
        console.log(`Ahoy, Captain! There are ${wealthySettlements} wealthy settlements to go to:`);
        for (const [settlement, data] of Object.entries(cities)) {
            console.log(`${settlement} -> Population: ${data.population} citizens, Gold: ${data.gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
