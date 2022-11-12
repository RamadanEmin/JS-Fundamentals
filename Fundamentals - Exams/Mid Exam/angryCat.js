function angryCat(items = [], entryPoint, valuable) {
    let leftItems = items.slice(0, entryPoint);
    let rightItems = items.slice(entryPoint + 1);
    let leftItemsSum = 0;
    let rightItemsSum = 0;
    let num = items[entryPoint];
    if (valuable === 'expensive') {
        leftItemsSum = leftItems.filter(x => x >= num).reduce((acc, curr) => acc + curr, 0);
        rightItemsSum = rightItems.filter(x => x >= num).reduce((acc, curr) => acc + curr, 0);
    } else if (valuable === 'cheap') {
        leftItemsSum = leftItems.filter(x => x < num).reduce((acc, curr) => acc + curr, 0);
        rightItemsSum = rightItems.filter(x => x < num).reduce((acc, curr) => acc + curr, 0);
    }
    leftItemsSum >= rightItemsSum
        ? console.log(`Left - ${leftItemsSum}`)
        : console.log(`Right - ${rightItemsSum}`);
}
angryCat([6, 2, 3, 4, 0, 6, 7, 8], 5, "expensive");
angryCat([6, 2, 3, 4, 0, 6, 7, 3, 5, -8], 5, "cheap");
angryCat([1, 5, 1], 1, "cheap");
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");