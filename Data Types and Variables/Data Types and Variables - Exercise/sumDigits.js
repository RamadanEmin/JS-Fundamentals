function sumDigits(num) {
    /*   let number = num;
         let sum = 0;
         while (number > 0) {
             sum += number % 10;
             number = Math.trunc(number / 10);
         }
         console.log(sum);                  */

    let number = "" + num;
    let currentNum = number.toString();
    let sum = 0;
    for (let i = 0; i < currentNum.length; i++) {
        sum += Number(currentNum[i]);
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);