function maxSequenceOfEqualElements(arr = []) {
    let longestSequence = [];
    let currentSequence = [];
    for (let i = 0; i < arr.length; i++) {
        let currentEl = Number(arr[i]);
        currentSequence = [currentEl];
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = Number(arr[j]);
            if (nextEl === currentEl) {
                currentSequence.push(nextEl)
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        }
    }
    console.log(longestSequence.join(' '));
}
maxSequenceOfEqualElements([0, 1, 5, 2, 2, 6, 3, 3]);