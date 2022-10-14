function triplesOfLatinLetters(num) {
    let firsNumber = `a`.charCodeAt(0);
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let result = String.fromCharCode(firsNumber + i, firsNumber + j, firsNumber + k);
                console.log(result);
            }
        }
    }
}
triplesOfLatinLetters(`2`);