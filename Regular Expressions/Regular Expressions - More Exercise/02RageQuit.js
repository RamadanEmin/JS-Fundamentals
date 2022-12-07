function rageQuit(input = []) {
    let patternForSymbols = /[^\d]+/g;
    let patternForDigits = /\d+/g;
    let digitsMatch = input.join('').match(patternForDigits);
    let rageMessage = input.join('').match(patternForSymbols).map(ch => ch.toUpperCase().repeat(digitsMatch.shift())).join('');
    let uniqueSymbols = new Set(rageMessage);
    console.log(`Unique symbols used: ${uniqueSymbols.size}`);
    console.log(`${rageMessage}`);
}
rageQuit(['aSd2&5s@1']);