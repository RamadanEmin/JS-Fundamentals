function plantDiscovery(input = []) {
    let numberOfPlants = +input.shift();
    let plants = {};
    let operations = {
        Rate: (plant, rating) => {
            rating = Number(rating);
            plants[plant].rating.push(rating);
        },
        Update: (plant, newRarity) => {
            plants[plant].rarity = newRarity;
        },
        Reset: (plant) => {
            plants[plant].rating = [];
        }
    };
    for (let i = 0; i < numberOfPlants; i++) {
        let [name, rarity] = input.shift().split('<->');
        plants[name] = { rarity, rating: [] };
    }
    for (const line of input) {
        if (line === 'Exhibition') {
            break;
        }
        let tokens = line.split(': ');
        let operation = tokens[0];
        let [name, parameter] = tokens[1].split(' - ');
        let plant = plants[name];
        plant ? operations[operation](name, parameter) : console.log('error');
    }
    console.log('Plants for the exhibition:');
    for (const [plant, data] of Object.entries(plants)) {
        let rarity = +data.rarity;
        let ratingLength = data.rating.length;
        let ratingSum = +data.rating.reduce((a, b) => a + b, 0)
        let averageRating = ratingSum ? ratingSum / ratingLength : 0;
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}
plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])