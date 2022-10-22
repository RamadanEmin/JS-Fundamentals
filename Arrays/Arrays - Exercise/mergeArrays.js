function mergeArrays(firstArr = [], seconArr = []) {
    let thirdArr = [];
    /*    for (let i = 0; i < firstArr.length; i++) {
            i % 2 === 0
                ? thirdArr[i] = Number(firstArr[i]) + Number(seconArr[i])
                : thirdArr[i] = firstArr[i]+seconArr[i];
        }                                                              */
    firstArr.map((element, i) => {
        i % 2 === 0
            ? thirdArr.push(Number(element) + Number(seconArr[i]))
            : thirdArr.push(element + seconArr[i]);
    });
    console.log(thirdArr.join(` - `));
}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);