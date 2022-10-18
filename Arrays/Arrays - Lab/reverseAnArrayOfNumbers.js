function reverseAnArrayOfNumbers(n, inputArr) {
    let sliceArr = [];
    for (let i = 0; i < n; i++) {
        /*      sliceArr.push(inputArr[i]);
          }
          let result = "";
          for (let j = sliceArr.length - 1; j >= 0; j--) {
              result += ' ' + sliceArr[j];              */
        sliceArr[n - 1 - i] = inputArr[i];
    }
    // console.log(result);
console.log(sliceArr.join(` `));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);