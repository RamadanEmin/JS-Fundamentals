function storage(input = []) {
    let storage = new Map();
    for (const line of input) {
        let [product, quantity] = line.split(` `);
        quantity = Number(quantity);
        if (storage.has(product)) {
            let currentQuantity = storage.get(product);
            quantity += currentQuantity;
        }
        storage.set(product, quantity);
    }
    for (const [key, value] of storage) {
        console.log()
    }
}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);