function postOffice(input = []) {
    let [firstPart, secondPart, thirdPart] = input[0].split('|');
    let firstPattern = /([#\$%\*&])(?<letter>[A-Z]+)\1/g;
    let secondPattern = /(?<asciiCode>\d+):(?<length>\d{2})/g;
    let words = thirdPart.split(' ');
    let firstMatch = firstPattern.exec(firstPart);
    let capitalLetters = firstMatch.groups.letter.split('');
    let wordsData = new Set(secondPart.match(secondPattern));
    for (const letter of capitalLetters) {
        let isTrue = false;
        for (const word of words) {
            if (letter === word[0]) {
                for (const wordData of wordsData) {
                    let [ascii, length] = wordData.split(':');
                    ascii = Number(ascii);
                    length = Number(length) + 1;
                    if (word.charCodeAt(0) === ascii && word.length === length) {
                        isTrue = true;
                        console.log(word);
                        wordsData.delete(wordData);
                        break;
                    }
                }
            }
            if (isTrue) {
                break;
            }
        }
    }
}
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])