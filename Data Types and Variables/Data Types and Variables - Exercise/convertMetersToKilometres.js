function convertMetersToKilometres(meters) {
    let kilometers = 0;
    if (typeof meters === `number`) {
        kilometers = meters / 1000;
    } else {
        meters = Number(meters);
        if (isNaN(meters)) {
            console.log(`Invalid input.`);
        }
        kilometers = meters / 1000;
    }
    console.log(kilometers.toFixed(2));
}
convertMetersToKilometres(798);