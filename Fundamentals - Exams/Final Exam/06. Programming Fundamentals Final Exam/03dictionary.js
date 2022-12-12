function dictionary(input) {
    let notebook = {};
    const result = [];
    let data = input[0].split(' | ');
    let words = input[1].split(' | ');
    let command = input[2];
    if (command === 'Hand Over') {
        for (const definition of data) {
            let word = definition.split(': ')[0];
            result.push(word);
        }
        console.log(result.join(' '));
    } else if (command === 'Test') {
        for (const line of data) {
            let tokens = line.split(': ');
            let [word, definition] = tokens;
            if (!notebook[word]) {
                notebook[word] = [];
            }
            notebook[word].push(definition);
        }
        for (const word of words) {
            if (notebook[word]) {
                result.push(`${word}:`);
                notebook[word].forEach((d,index) => result.push(` -${notebook[word][index]}`));
                console.log(result.join('\n'));
            }
        }
    }
}

dictionary([
    "programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over"
]);
// programmer developer

dictionary([
    "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"
]);
// care:
//  -worry, anxiety, or concern
//  -a state of mind in which one is troubled