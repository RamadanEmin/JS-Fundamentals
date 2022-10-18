function reverseInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let oldElement = array[i];
        let previousIndex = array.length - 1 - i;
        array[i] = array[previousIndex];
        array[previousIndex] = oldElement;
    }
    console.log(array.join(` `));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);

for (const item of object) {
    
}

for (const item in object) {
    
}

