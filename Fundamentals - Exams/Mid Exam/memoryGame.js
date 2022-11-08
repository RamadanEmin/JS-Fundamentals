function memoryGame(elements = []) {
    let sequenceOfElements = elements.shift().split(` `);
    let element = elements.shift();
    let moves = 0;
    let isEmpty = true;
    while (element !== `end`) {
        let [index1, index2] = element.split(` `);
        moves++;
        if (index1 < 0 || index2 < 0 ||
            index1 >= sequenceOfElements.length || index2 >= sequenceOfElements.length ||
            index1 === index2) {
            sequenceOfElements.splice(sequenceOfElements.length / 2, 0, `-${moves}a`, `-${moves}a`)
            console.log("Invalid input! Adding additional elements to the board");
            element = elements.shift();
            continue;
        }
        if (sequenceOfElements[index1] === sequenceOfElements[index2]) {
            console.log(`Congrats! You have found matching elements - ${sequenceOfElements[index1]}!`);
            let el = sequenceOfElements[index2];
            sequenceOfElements.splice(index1, 1);
            let index = sequenceOfElements.indexOf(el);
            sequenceOfElements.splice(index, 1);
        } else {
            console.log("Try again!");
        }
       if (sequenceOfElements.length === 0) {
            isEmpty = false;
            console.log(`You have won in ${moves} turns!`);
            break;
        }
        element = elements.shift();
    }
    if (isEmpty) {
        console.log(`Sorry you lose :(
${sequenceOfElements.join(` `)}`);
    }
}
memoryGame(
    ["1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]
);