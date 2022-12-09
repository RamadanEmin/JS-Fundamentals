function decryptingCommands(input = []) {
    let text = input.shift();
    const commands = {
        Replace: (currentChar, newChar) => {
            text = text.replaceAll(currentChar, newChar);
            console.log(text);
        },
        Cut: (startIndex, endIndex) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (startIndex < 0 || endIndex >= text.length) {
                console.log('Invalid indices!');
                return;
            }
            let reducer = text.substring(startIndex, endIndex + 1);
            text = text.replace(reducer, '');
            console.log(text);
        },
        Make: (param) => {
            if (param === 'Upper') {
                text = text.toUpperCase();
            } else if (param === 'Lower') {
                text = text.toLowerCase();
            }
            console.log(text);
        },
        Check: (string) => {
            if (text.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }
        },
        Sum: (startIndex, endIndex) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let sum = 0;
            if (startIndex < 0 || endIndex >= text.length) {
                console.log('Invalid indices!');
                return;
            }
            const currentText = text.substring(startIndex, endIndex + 1);
            for (let i = 0; i < currentText.length; i++) {
                sum += currentText.charCodeAt(i);
            }
            console.log(sum);
        }
    };
    while (input[0] !== 'Finish') {
        let [command, paramOne, paramTwo] = input.shift().split(' ');
        commands[command](paramOne, paramTwo);
    }
}

decryptingCommands([
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"]);
// WeLikeSoftUni
// WELIKESOFTUNI
// Message doesn't contain SoftUni
// 293
// WESOFTUNI

decryptingCommands(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"]);
// HarryNameDay
// harrynameday
// Invalid indices!
// Invalid indices!
