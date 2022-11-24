function catalogue(params = []) {
    let catalogue = {};
    for (const param of params) {
        let [product, price] = param.split(` : `).filter(x => x !== ``);
        catalogue[product] = price;
    }
    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));
    let firstLetter = ``;
    for (const product of sortedCatalogue) {
        if (firstLetter !== product[0][0]) {
            firstLetter = product[0][0]
            console.log(product[0][0]);
        }
        console.log(`  ${product[0]}: ${product[1]}`);
    }
}
catalogue(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']);
