function evenAndOddSubtraction(arr) {
    let sum = 0;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (const num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    sum = sumEven - sumOdd;
    console.log(sum);
}
evenAndOddSubtraction([2,4,6,8,10]);