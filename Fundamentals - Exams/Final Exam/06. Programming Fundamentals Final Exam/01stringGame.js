function stringGame(input) {
    let message = input.shift();
    const commands = {
        Change: (char, replacement) => {
            message = message.replaceAll(char, replacement);
            console.log(message);
        },
        Includes: (substring) => {
            console.log(message.includes(substring));
        },
        End: (substring) => {
            console.log(message.endsWith(substring));
        },
        Uppercase: () => {
            message = message.toUpperCase();
            console.log(message);
        },
        FindIndex: (char) => {
            const index = message.indexOf(char);
            console.log(index);
        },
        Cut: (startIndex, count) => {
            startIndex = Number(startIndex);
            count = Number(count);
            message = message.substring(startIndex, startIndex + count);
            console.log(message);
        },
    };
    while (input[0] !== 'Done') {
        let [command, param1, param2] = input.shift().split(' ');
        commands[command](param1, param2);
    }
}
stringGame([
    "*S0ftUni is thw B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"
]);
// *S0ftUni is thw B3St Plac3**
// false
// false
// *S0FTUNI IS THW B3ST PLAC3**
// 21
// FTUNI I

stringGame([
    "//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"
]);
//This is my string!//
// true
// false
//THIS IS MY STRING!//
// 4
// S IS 