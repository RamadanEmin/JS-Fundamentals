function wildZoo(input) {
    let animals = {};
    let areas = {    };
    const commands = {
        Add: (animalName, neededFoodQuantity, area) => {
            neededFoodQuantity = Number(neededFoodQuantity);
            if(!areas[area]){
                areas[area] = [];
            }
            if (!animals[animalName]) {
                animals[animalName] = 0;
                areas[area].push(animalName);
            }
            animals[animalName] += neededFoodQuantity;
        },
        Feed: (animalName, food) => {
            food = Number(food);
            if (animals[animalName]) {
                animals[animalName] -= food;
                if (animals[animalName] <= 0) {
                    for (const [animal, areaName] of Object.entries(areas)) {
                        const areaIndex = areaName.indexOf(animalName);
                        if (areaIndex >= 0) {
                            areaName.splice(areaIndex, 1);
                        }
                        if (areaName.length === 0) {
                            delete areas[animal];
                        }
                    }
                    delete animals[animalName];
                    console.log(`${animalName} was successfully fed`);
                }
            }
        }
    };
    while (input[0] !== 'EndDay') {
        let [command, tokens] = input.shift().split(': ');
        let [param1, param2, param3] = tokens.split('-');
        commands[command](param1, param2, param3);
    }
    console.log('Animals:');
    for (const [name, food] of Object.entries(animals)) {
        console.log(`${name} -> ${food}g`);
    }
    console.log('Areas with hungry animals:');
    for (const [name, area] of Object.entries(areas)) {
        console.log(`${name}: ${area.length}`);
    }
}

wildZoo([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"
]);
// Sam was successfully fed
// Animals:
// Bonie -> 190g
// Maya -> 2170g
// Areas with hungry animals:
// RiverArea: 1
// ByTheCreek: 1 

wildZoo([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"
]);
// Jamie was successfully fed
// Adam was successfully fed
// Animals:
// Maya -> 6570g
// Bobbie -> 6570g
// Areas with hungry animals:
// WaterfallArea: 2