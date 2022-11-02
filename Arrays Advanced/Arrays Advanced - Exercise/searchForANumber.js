function searchForANumber(input = [], numbers = []) {
    let numbersToTake = numbers[0];
    let numbersToRemove = numbers[1];
    let numberToSearch = numbers[2];
    /*  let arr = input.slice(0, numbersToTake);
        arr.splice(0, numbersToRemove);
        let searchCount = 0;
        for (const element of arr) {
            if (numberToSearch === element) {
                searchCount++;
            }
        }                                           */
    let searchCount = input
        .slice(0, numbersToTake)
        .slice(numbersToRemove)
        .filter(num => num === numberToSearch)
        .length;
    console.log(`Number ${numberToSearch} occurs ${searchCount} times.`);
}
searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);