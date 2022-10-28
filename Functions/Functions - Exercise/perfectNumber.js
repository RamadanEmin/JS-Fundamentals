function perfectNumber(number) {
    function getSumDivisors(n) {
        let counter = 0;
        let sum = 0;  // 1 is a proper divisor
        // Note that this loop runs till square root of n
        for (let i = 1; i <= Math.sqrt(n); i++) {
            counter++;
            if (n % i == 0) {
                // If divisors are equal, take only one of them
                if (n / i == i) {
                    sum = sum + i;
                }
                else {
                    // Otherwise take both
                    sum = sum + i;
                    sum = sum + Math.floor(n / i);
                }
            }
        }
        // calculate sum of all proper divisors only
        return sum - n;
    }
    let getSumDivisorsValue = getSumDivisors(number);
    if (getSumDivisorsValue === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(28);