function degustationParty(input) {
    let customers = {};
    let count=0;
    const commands = {
        Like: (guest, meal) => {
            if (!customers[guest]) {
                customers[guest] = {
                    liked: [],
                    disliked: 0
                };
            }
            if (!customers[guest].liked.includes(meal)) {
                customers[guest].liked.push(meal);
            }
        },
        Dislike: (guest, meal) => {
            if (!customers[guest]) {
                console.log(`${guest} is not at the party.`);
            } else if (!customers[guest].liked.includes(meal)) {
                console.log(`${guest} doesn't have the ${meal} in his/her collection`);
            } else {
                const mealIndex = customers[guest].liked.findIndex(g => g.meal === meal);
                customers[guest].liked.splice(mealIndex, 1);
                customers[guest].disliked++;
                count=customers[guest].disliked;
                console.log(`${guest} doesn't like the ${meal}.`);
            }
        }
    };
    while (input[0] !== 'Stop') {
        const [command, param1, param2] = input.shift().split('-');
        commands[command](param1, param2);
    }
    for (const [name, data] of Object.entries(customers)) {
        console.log(`${name}: ${data.liked.join(', ')}`);
    }
    console.log(`Unliked meals: ${count}`);
}
degustationParty([
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"
]);
// Krisi: shrimps, soup
// Penelope: dessert
// Misho: salad
// Unliked meals: 0

degustationParty([
    "Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"
]);
// Vili is not at the party.
// Krisi doesn't have the salad in his/her collection
// Krisi: shrimps
// Unliked meals: 0

degustationParty([
    "Like-Vili-carp",
    "Dislike-Vili-carp",
    "Stop"
]);
// Vili doesn't like the carp.
// Vili: 
// Unliked meals: 1