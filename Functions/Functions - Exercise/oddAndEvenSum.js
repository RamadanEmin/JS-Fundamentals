function oddAndEvenSum(number) {
    let sumEven = 0;
    let sumOdd = 0;
    let num = number.toString();
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            sumEven += Number(num[i]);
        } else {
            sumOdd += Number(num[i]);
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(3495892137259234);