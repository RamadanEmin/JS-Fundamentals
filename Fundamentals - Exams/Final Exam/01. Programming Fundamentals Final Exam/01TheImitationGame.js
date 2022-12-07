function theImitationGame(commands = []) {
    let message = commands.shift();
    for (const command of commands) {
        if (command === 'Decode') {
            break;
        }
        let [typesOfInstructions, value1, value2] = command.split('|');
        if (typesOfInstructions === 'Move') {
            let start = message.substring(0, value1);
            let end = message.substring(value1);
            message = end + start;
        } else if (typesOfInstructions === 'Insert') {
            let start = message.substring(0, value1);
            let end = message.substring(value1);
            message = start + value2 + end;
        } else if (typesOfInstructions === 'ChangeAll') {
            message = message.split(value1).join(value2);
        }
    }
    return `The decrypted message is: ${message}`;
}
console.log(theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',]));
