function hogwarts(input) {
    let text = input.shift();
    const commands = {
        Abjuration: () => {
            text = text.toUpperCase();
            console.log(text);
        },
        Necromancy: () => {
            text = text.toLowerCase();
            console.log(text);
        },
        Illusion: (index, letter) => {
            index = Number(index);
            if (index < 0 || index >= text.length) {
                console.log('The spell was too weak.');
                return;
            }
            text = text.replace(text[index], letter);
            console.log('Done');
        },
        Divination: (firstSubstring, secondSubstring) => {
            if (text.includes(firstSubstring)) {
                text = text.replaceAll(firstSubstring, secondSubstring);
                console.log(text);
            }
        },
        Alteration: (substring) => {
            if (text.includes(substring)) {
                text = text.replace(substring, '');
                console.log(text);
            }
        }
    };
    while (input[0] !== 'Abracadabra') {
        let [command, param1, param2] = input.shift().split(' ');
        if (!commands.hasOwnProperty(command)) {
            console.log('The spell did not work!');
            continue;
        }
        commands[command](param1, param2);
    }
}

hogwarts(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"]);
// The spell did not work!
// SWORDMASTER
// swordmaster
// sword 