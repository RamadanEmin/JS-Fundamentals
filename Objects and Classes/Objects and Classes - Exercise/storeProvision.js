function storeProvision(currentStock = [], orders = []) {
    let products = {};
    for (let i = 0; i < orders.length; i++) {
        currentStock.push(orders[i]);
    }
    while (currentStock.length) {
        let [product, quantity] = [currentStock.shift(), currentStock.shift()];
        if (!products.hasOwnProperty(product)) {
            products[product] = Number(quantity);
        } else {
            products[product] += Number(quantity);
        }
    }
    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);