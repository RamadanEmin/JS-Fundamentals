function lastKNumbersSequance(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        result[i] = sumLastK(result, k);
    }
    function sumLastK(array, k) {
        k = array.length > k ? k : array.length;
        let sum = 0;
        for (let i = 1; i <= k; i++) {
            sum += array[array.length - i];
        }
        return sum;
    }
    console.log(`${result.join(' ')}`);
}
lastKNumbersSequance(8, 2);