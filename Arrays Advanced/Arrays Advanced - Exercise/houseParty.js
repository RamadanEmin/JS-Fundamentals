function houseParty(input = []) {
    let guestList = [];
    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(` is `).filter(x => x !== ``);
        let guest = token[0];
        let index = guestList.indexOf(guest);
        if (token[1] === `going!`) {
            if (index === -1) {
                guestList.push(guest);
            } else {
                console.log(`${guest} is already in the list!`);
            }
        } else if (token[1] === `not going!`) {
            if (index !== -1) {
                guestList.splice(index, 1);
            } else {
                console.log(`${guest} is not in the list!`);
            }
        }
    }
    return guestList.join(`\n`);
}
console.log(houseParty(
    ['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']

));