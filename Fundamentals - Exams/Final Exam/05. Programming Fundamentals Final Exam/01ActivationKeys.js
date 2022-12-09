function activationKeys(input = []) {
    let activationKey = input.shift();
    let commands = {
        Contains: (activationKey = '', substring) => {
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log("Substring not found!");
            }
            return activationKey;
        },
        Flip: (activationKey = '', letter, startIndex, endIndex) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let start = activationKey.substring(0, startIndex);
            let end = activationKey.substring(endIndex);
            let substring = activationKey.substring(startIndex, endIndex);
            if (letter === 'Upper') {
                substring = substring.toUpperCase();
            } else if (letter === 'Lower') {
                substring = substring.toLowerCase();
            }
            activationKey = start + substring + end;
            console.log(activationKey);
            return activationKey;
        },
        Slice: (activationKey = '', startIndex, endIndex) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let substring = activationKey.substring(startIndex, endIndex);
            activationKey = activationKey.replace(substring, '');
            console.log(activationKey);
            return activationKey;
        }
    };
    while (input[0] !== 'Generate') {
        let [command, paramOne, paramTwo, paramThree] = input.shift().split('>>>');
        activationKey = commands[command](activationKey, paramOne, paramTwo, paramThree);
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
