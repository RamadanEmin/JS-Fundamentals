function treasureFinder(input = []) {
    let key = input.shift().split(' ').map(Number);
    while (input.length > 0) {
        let string = input.shift();
        if (string === 'find') {
            break;
        }
        let decryptMessage = key.slice();
        let result = '';
        for (let i = 0; i < string.length; i++) {
            let decrypter = decryptMessage.shift();
            decryptMessage.push(decrypter);
            result += String.fromCharCode(string[i].charCodeAt() - decrypter);
        }
        let treasureFirstIndex = result.indexOf('&');
        let treasureLasttIndex = result.lastIndexOf('&');
        let coordinatesFirstIndex = result.indexOf('<');
        let coordinatesLastIndex = result.indexOf('>');
        let type = result.slice(treasureFirstIndex + 1, treasureLasttIndex);
        let coordinates = result.slice(coordinatesFirstIndex + 1, coordinatesLastIndex);
        console.log(`Found ${type} at ${coordinates}`);
    }
}
treasureFinder([
    "1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]);