function rotateArray(arr = []) {
    let lastNum = Number(arr.pop());
    for (let index = 0; index < lastNum; index++) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
    }
    console.log(arr.join(` `));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

