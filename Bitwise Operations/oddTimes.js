function oddTimes(input = ``) {
    let num = input.split(` `);
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result = result ^ num[i]
    }
    console.log(result);
}
oddTimes(`5 7 5 2 7 5 2`);