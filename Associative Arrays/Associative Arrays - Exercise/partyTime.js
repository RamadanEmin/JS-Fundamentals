function partyTime(input = []) {
    function createList(guestList) {
        let guests = {
            vip: [],
            regular: []
        };
        guestList.forEach(guest => {
            if (isNaN(Number(guest[0]))) {
                guests.regular.push(guest);
            } else {
                guests.vip.push(guest);
            }
        });
        return guests;
    }

    function removeGuests(arr, guestsObj) {
        arr.forEach(guest => {
            if (guestsObj.vip.includes(guest)) {
                let index = guestsObj.vip.indexOf(guest);
                guestsObj.vip.splice(index, 1);
            }
            if (guestsObj.regular.includes(guest)) {
                let index = guestsObj.regular.indexOf(guest);
                guestsObj.regular.splice(index, 1);
            }
        });
        return guestsObj;
    }

    function createOutput(guests) {
        // let output = [];
        // guests.vip.forEach(vip => output.push(vip));
        // guests.regular.forEach(regular => output.push(regular));
        let output = guests.vip.concat(guests.regular);
        return output.length + `\n` + output.join(`\n`);
    }

    let partyIndex = input.indexOf(`PARTY`);
    let guestList = createList(input.slice(0, partyIndex));
    let removedGuest = removeGuests(input.slice(partyIndex + 1), guestList);
    return createOutput(removedGuest);
}
console.log(partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]));