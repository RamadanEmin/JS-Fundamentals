function addAndSubtract(firstArray = []) {
    let secondArray = [];
    let sumArr1 = 0;
    let sumArr2 = 0;
    /*   for (let i = 0; i < firstArray.length; i++) {
           let currentNumber = Number(firstArray[i]);
           if (currentNumber % 2 === 0) {
               secondArray[i] = currentNumber + i;
           } else {
               secondArray[i] = currentNumber - i;
           }
       }
       for (let i = 0; i < firstArray.length; i++) {
          sumArr1+=firstArray[i];
          sumArr2+=secondArray[i];
       }                                               */
    firstArray.map((number, index) => {
        number % 2 === 0 ? number += index : number -= index
        secondArray.push(number);
    });
    console.log(secondArray);
    console.log(sumArr1 = firstArray.reduce((a, b) => a + b, 0));
    console.log(sumArr2 = secondArray.reduce((a, b) => a + b, 0));
    /* console.log(sumArr1);
       console.log(sumArr2);                              */
}
addAndSubtract([5, 15, 23, 56, 35]);
