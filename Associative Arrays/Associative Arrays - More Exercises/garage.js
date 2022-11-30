function garage(input = []) {
    let garages = {};
    for (const line of input) {
        let tokens = line.split(` - `);
        let garageNumber = Number(tokens[0]);
        let carInfo = tokens[1];
        if (garages[garageNumber] === undefined) {
            garages[garageNumber] = [];
        }
        garages[garageNumber].push(carInfo);
    }
    for (const garage in garages) {
        console.log(`Garage № ${garage}`);
        garages[garage].forEach(car => console.log(`--- ${car.replace(/: /g, ' - ')}`));
    }
}
// function garageMap(inputArr) {
//     let garagesMap = new Map();
//     for (let row of inputArr) {
//         let [garage, carKeyValues] = row.split(' - ');
//         if (!garagesMap.has(garage)) {
//             garagesMap.set(garage, [carKeyValues]);
//         } else {
//             let availableCars = garagesMap.get(garage);
//             availableCars.push(carKeyValues);
//             garagesMap.set(garage, availableCars);
//         }
//     }
//     let sortedGarages = [...garagesMap.entries()];
//     let output = '';
//     for (let [currGarage, currCarKeyValue] of sortedGarages) {
//         output += `Garage № ${currGarage}\n`;
//         for (let currCarProperties of currCarKeyValue) {
//             currCarProperties = currCarProperties.replace(/: /g, ' - ');
//             output += `--- ${currCarProperties}\n`;
//         }
//     }
//     console.log(output);
// }
garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);