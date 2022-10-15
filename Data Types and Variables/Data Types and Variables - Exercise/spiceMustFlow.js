function spiceMustFlow(startingYield) {
    let totalSpice = 0;
    let daysCounter = 0;
    while (startingYield >= 100) {
        daysCounter++;
        totalSpice += startingYield;
        totalSpice -= 26;
        startingYield -= 10;
    }
    if (startingYield >= 26 && daysCounter > 0) {
        totalSpice -= 26;
    }
    console.log(daysCounter);
    console.log(totalSpice);
}
spiceMustFlow(111);
spiceMustFlow(450);