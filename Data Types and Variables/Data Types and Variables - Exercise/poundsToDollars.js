function poundsToDollars(pounds) {
    let dollars = 1;
    let rate = 1.31;
    if (typeof pounds === `number`) {
        dollars = pounds * rate;
    } else {
        pounds = Number(pounds);
        if (isNaN(pounds)) {
            console.log(`Invalid input.`);
        }
        dollars = pounds * rate;
    }
    console.log(dollars.toFixed(3));
}
poundsToDollars(80);