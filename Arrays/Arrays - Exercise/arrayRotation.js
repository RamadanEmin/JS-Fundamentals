function arrayRotation(arr = [], rotations) {
    for (let i = 0; i < rotations; i++) {
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(` `));
}
arrayRotation([2, 4, 15, 31], 5);