function passwordValidator(input) {
    let password = input.shift();
    let commands = {
        Make: (comm, index) => {
            index = Number(index);
            const start = password.substring(0, index);
            const end = password.substring(index + 1);
            let substring;
            if (comm === 'Upper') {
                substring = password[index].toUpperCase();
            } else if (comm === 'Lower') {
                substring = password[index].toLowerCase();
            }
            password = start + substring + end;
            console.log(password);
        },
        Insert: (index, char) => {
            index = Number(index);
            if (input >= 0 || index < password.length) {
                const start = password.substring(0, index);
                const end = password.substring(index);
                password = start + char + end;
                console.log(password);
            }
        },
        Replace: (char, value) => {
            value=Number(value);
            const character = password.indexOf(char);
            if (character >= 0) {
                let currentValue = password.charCodeAt(character) + value;
                password = password.replaceAll(char, String.fromCharCode(currentValue));
                console.log(password);
            }
        },
        Validation: () => {
            if (password.length < 8) {
                console.log('Password must be at least 8 characters long!');
            }
            if (!password.match(/\w+/g)) {
                console.log('Password must consist only of letters, digits and _!');
            }
            if (!password.match(/[A-Z]+/g)) {
                console.log('Password must consist at least one uppercase letter!');
            }
            if (!password.match(/[a-z]+/g)) {
                console.log('Password must consist at least one lowercase letter!');
            }
            if (!password.match(/\d+/g)) {
                console.log('Password must consist least one digit!');
            }
        }
    };
    while (input[0] !== 'Complete') {
        let [command, paramOne, paramTwo] = input.shift().split(' ');
        commands[command](paramOne, paramTwo);
    }
}
passwordValidator([
    '123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'
]);
// 123R456789
// 123R4D6789
// Password must consist at least one lowercase letter!
// 123r4D6789