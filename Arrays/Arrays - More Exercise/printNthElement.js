function printNthElement(arr = []) {
    let lastNum = arr.pop();
    let resultArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (index % lastNum === 0) {
            resultArr.push(arr[index]);
        }
    }
    console.log(resultArr.join(' '));
}
printNthElement(['dsa', 'asd', 'test', 'test', '2']);