function commonElements(firstArr = [], seconArr = []) {
    /*    for (let i = 0; i < firstArr.length; i++) {
            let element = firstArr[i];
            for (let j = 0; j < seconArr.length; j++) {
                if (element === seconArr[j]) {
                    console.log(element);
                }
            }
        }                                               */
    firstArr.map(element => {
        if (seconArr.includes(element)) {
            console.log(element);
        }
    });
}
commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);