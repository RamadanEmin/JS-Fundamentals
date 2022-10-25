function repeatString(str, count) {
    let repeat = "";
    for (let i = 0; i < count; i++) {
        repeat += str;
    }
    return repeat;
}
let result = repeatString("abc", 3);
console.log(result);