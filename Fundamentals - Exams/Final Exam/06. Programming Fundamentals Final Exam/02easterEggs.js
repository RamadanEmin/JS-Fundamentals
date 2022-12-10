function easterEggs(input) {
    let text = input[0];
    const pattern = /([#|@]+)(?<color>[a-z]{3,})([#|@]+)([^A-Za-z0-9]*)([\/]+)(?<amount>[\d]+)([\/]+)/g;
    let valid;
    while (valid = pattern.exec(text)) {
        console.log(`You found ${valid.groups.amount} ${valid.groups.color} eggs!`);
    }
}
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);
// You found 8 red eggs!
// You found 10 purple eggs!
easterEggs(['*@@@@green@*/10/@ye10w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
// You found 10 green eggs!
// You found 8 red eggs!
// You found 6 red eggs!
// You found 5 purple eggs!