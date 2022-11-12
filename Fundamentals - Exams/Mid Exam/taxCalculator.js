function taxCalculator(input = []) {
    let vehicles = input.slice().shift().split('>>').filter(x => x !== '');
    let totalTax = 0
    let sumTotalTax = 0;
    for (let i = 0; i < vehicles.length; i++) {
        let [type, years, milles] = vehicles[i].split(' ');
        years = Number(years);
        milles = Number(milles);
        if (type === 'family') {
            totalTax = 50 - years * 5 + Math.floor(milles / 3000) * 12;
        } else if (type === 'heavyDuty') {
            totalTax = 80 - years * 8 + Math.floor(milles / 9000) * 14;
        } else if (type === 'sports') {
            totalTax = 100 - years * 9 + Math.floor(milles / 2000) * 18;
        } else {
            console.log("Invalid car type.");
            continue;
        }
        console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
        sumTotalTax += totalTax;
    }
    console.log(`The National Revenue Agency will collect ${sumTotalTax} euros in taxes.`);
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])