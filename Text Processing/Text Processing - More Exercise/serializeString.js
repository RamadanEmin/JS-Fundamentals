function serializeString(input = []) {
    let string = input[0];
    let letter = [];
    for (const ch of string) {
        if (!letter.includes(ch)) {
            letter.push(ch);
        }
    }
    while (letter.length > 0) {
        let char = letter.shift();
        let indexes = [];
        for (let i = 0; i < string.length; i++) {
            if (char === string[i]) {
                indexes.push(i);
            }
        }
        console.log(`${char}:${indexes.join('/')}`);
    }
}
serializeString(["avjavamsdmcalsdm"]);