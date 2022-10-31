function smallestTwoNumbers(arr = []) {
    let sortedInAscending = arr.sort((a, b) => a - b);
    let result = sortedInAscending.slice(0,2);
    console.log(result.join(` `));
}
smallestTwoNumbers([30, 15, 50, 5]);