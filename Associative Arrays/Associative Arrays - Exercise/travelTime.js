function travelTime(input = []) {
    let contries = {};
    for (const line of input) {
        let [countryName, townName, travelCost] = line.split(` > `);
        travelCost = Number(travelCost);
        if (contries[countryName] === undefined) {
            contries[countryName] = {};
        }
        if (contries[countryName][townName] === undefined) {
            contries[countryName][townName] = travelCost;
        }
        if (contries[countryName][townName] > travelCost) {
            contries[countryName][townName] = travelCost;
        }
    }
    let sortedContries = Object.entries(contries).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [contry, town] of sortedContries) {
        let sortedTowns = Object.entries(town).sort((a, b) => a[1] - b[1]).map(t => t.join(` -> `));
        console.log(`${contry} -> ${sortedTowns.join(` `)}`);
    }
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 2500',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);