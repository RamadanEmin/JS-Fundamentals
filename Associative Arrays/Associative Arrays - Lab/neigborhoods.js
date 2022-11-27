function neigborhoods(input = []) {
    let neigborhoods = new Map();
    input.shift().split(`, `).forEach(name => neigborhoods.set(name, []));
    for (const line of input) {
        let [neigborhoodName, person] = line.split(` - `);
        if (neigborhoods.has(neigborhoodName)) {
            neigborhoods
                .get(neigborhoodName)
                .push(person);
        }
    }
    let sortNeigborhoods = Array
        .from(neigborhoods.entries())
        .sort((a, b) => b[1].length - a[1].length);
    let result = new Map(sortNeigborhoods);
    for (const [neigborhoodName, residents] of result) {
        console.log(`${neigborhoodName}: ${residents.length}`);
        residents.forEach(person => console.log(`--${person}`));
    }
}
neigborhoods([
    `Abbey Street, Herald Street, Bright Mews`,
    `Bright Mews - Garry`,
    `Bright Mews - Andrea`,
    `Invalid Street - Tommy`,
    `Abbey Street - Billy`
]);