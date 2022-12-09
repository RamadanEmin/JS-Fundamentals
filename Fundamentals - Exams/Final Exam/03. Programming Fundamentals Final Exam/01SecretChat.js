function secretChat(input = []) {
    let message = input.shift();
    let commands = {
        InsertSpace: (message = '', index) => {
            index = Number(index);
            let start = message.substring(0, index);
            let end = message.substring(index);
            message = start + ' ' + end;
            console.log(message);
            return message;
        },
        Reverse: (message = '', substring) => {
            if (message.includes(substring)) {
                message = message.replace(substring, '');
                substring = substring.split('').reverse().join('');
                message = message + substring;
                console.log(message);
            } else {
                console.log('error');
            }
            return message;
        },
        ChangeAll: (message = '', substring, replacement) => {
            message = message.split(substring).join(replacement);
            console.log(message);
            return message;
        }
    };
    while (input[0] !== 'Reveal') {
        let [command, paramOne, paramTwo] = input.shift().split(':|:');
        message = commands[command](message, paramOne, paramTwo);
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'heVVodar!gniVyyyy',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])
