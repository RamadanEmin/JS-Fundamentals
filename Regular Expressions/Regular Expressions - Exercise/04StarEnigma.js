function starEnigma(input = []) {
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let numberOfMessages = +input.shift();
    let pattern = /[STARstar]/g;
    let decrypter = /@(?<planet>[A-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
    for (let i = 0; i < numberOfMessages; i++) {
        let key = 0;
        for (const item of input[i].matchAll(pattern)) {
            key++;
        }
        let decrypted = input[i].split('').map(ch => String.fromCharCode(ch.charCodeAt() - key)).join('');
        let validMatch = decrypted.match(decrypter);
        if (validMatch) {
            if (validMatch[3] === 'A') {
                attackedPlanets.push(validMatch[1]);
            } else if (validMatch[3] === 'D') {
                destroyedPlanets.push(validMatch[1]);
            }
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets
        .sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets
        .sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));
}
starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'])
