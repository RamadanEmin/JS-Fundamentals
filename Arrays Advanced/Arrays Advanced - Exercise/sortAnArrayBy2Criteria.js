function sortAnArrayBy2Criteria(input = []) {
    return input.slice().sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    }).join(`\n`);
}
console.log(sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));