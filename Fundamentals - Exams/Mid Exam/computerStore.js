function computerStore(input = []) {
    let command = input.shift();
    let pricewWithoutTax = 0;
    while (command !== `special` && command !== `regular`) {
        partPrices = Number(command);
        if (partPrices <= 0) {
            console.log("Invalid price!");
            command = input.shift();
            continue;
        }
        pricewWithoutTax += partPrices;
        command = input.shift();
    }
    if (pricewWithoutTax === 0) {
        console.log("Invalid order!");
    } else {
        let tax = pricewWithoutTax * 0.20;
        let totalPrice = pricewWithoutTax + tax;
        if (command === `special`) {
            totalPrice *= 0.90;
        }

        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${pricewWithoutTax.toFixed(2)}$
Taxes: ${tax.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore((['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']));