function maxNumber(arr = []) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isTopInt = true;
        let currentElement = arr[i];
        let rightElementsArray = arr.slice(i + 1);
        for (let j = 0; j < rightElementsArray.length; j++) {
            if (currentElement <= rightElementsArray[j]) {
                isTopInt = false;
                break;
            }
        }
        if (isTopInt) {
            resultArr.push(currentElement);
        }
    }
    console.log(resultArr.join(` `));
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);