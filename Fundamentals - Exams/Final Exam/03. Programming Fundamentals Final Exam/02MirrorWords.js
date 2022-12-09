function mirrorWords(input = []) {
    let text = input[0];
    let mirrorImages = [];
    let pattern = /([@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let valid;
    let counter = 0
    while (valid = pattern.exec(text)) {
        counter++;
        let word = valid.groups.wordOne;
        let mirrorWord = valid.groups.wordTwo.split('').reverse().join('');
        if (word === mirrorWord) {
            mirrorImages.push(`${word} <=> ${valid.groups.wordTwo}`);
        }
    }
    if (counter > 0) {
        console.log(`${counter} word pairs found!`);
        if (mirrorImages.length > 0) {
            console.log("The mirror words are:");
            console.log(mirrorImages.join(', '));
        } else {
            console.log("No mirror words!");
        }
    } else {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);