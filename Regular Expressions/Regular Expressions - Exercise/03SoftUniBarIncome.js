function softUniBarIncome(input = []) {
    let totalCost = 0;
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+([.][\d]+)?)\$/;
    let line = input.shift();
    while (line !== 'end of shift') {
        let people = pattern.exec(line);
        if (people) {
            let totalPrice = people.groups.count * people.groups.price;
            totalCost += totalPrice;
            console.log(`${people.groups.customer}: ${people.groups.product} - ${totalPrice.toFixed(2)}`);
        }
        line = input.shift();
    }
    console.log(`Total income: ${totalCost.toFixed(2)}`);
}
softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])