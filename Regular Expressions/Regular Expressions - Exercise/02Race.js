function race(input = []) {
    let patternLetter = /\d*\W*\d*/;
    let paternDigit = /[A-z]*\W*[A-z]*/;
    let racers = {};
    let participants = input.shift().split(', ');
    let line = input.shift();
    while (line !== 'end of race') {
        let name = line.split(patternLetter).join('');
        let distance = line.split(paternDigit).map(Number).reduce((a, b) => a + b, 0);
        if (participants.includes(name)) {
            if (!racers.hasOwnProperty(name)) {
                racers[name] = distance;
            } else {
                racers[name] += distance;
            }
        }
        line = input.shift();
    }
    let sortedRacers = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    return `1st place: ${sortedRacers[0][0]}\n2nd place: ${sortedRacers[1][0]}\n3rd place: ${sortedRacers[2][0]}`;
}
console.log(race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']));