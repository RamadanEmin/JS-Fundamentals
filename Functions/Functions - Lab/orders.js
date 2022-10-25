function orders(order, count) {
    let coffee = 1.50;
    let coke = 1.40;
    let water = 1.00;
    let snacks = 2.00;
    let result = 0;
    switch (order) {
        case `coffee`: result = count * coffee;
            break;
        case `coke`: result = count * coke;
            break;
        case `water`: result = count * water;
            break;
        case `snacks`: result = count * snacks;
            break;
    }
    console.log(result.toFixed(2));
}
orders("water", 5);