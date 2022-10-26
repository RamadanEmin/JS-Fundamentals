function factorialDivision(numOne, numTwo) {
    function factorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    function factorialRecursion(num) {
        if (num === 1) {
            return 1;
        }
        let res = num * factorialRecursion(num - 1);
        return res;
    }
    let factorialOne = factorialRecursion(numOne);
    let factorialTwo = factorialRecursion(numTwo);
    let result = factorialOne / factorialTwo;
    console.log(result.toFixed(2));
}
factorialDivision(5, 2);