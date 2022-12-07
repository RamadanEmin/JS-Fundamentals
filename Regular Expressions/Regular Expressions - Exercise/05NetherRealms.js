function netherRealms(input = '') {
    let listOfDemons = [];
    let demons = input.split(/[, ]+/g);
    for (const demon of demons) {
        let health = 0;
        let damage = 0;
        let patternForHealth = /[^0-9+\-\*\/\.]/g;
        let patternForDamage = /[-]?\d+([\.]?[\d]+)?/g;
        let patternForOperators = /[*\/]/g;
        let characters = demon.match(patternForHealth);
        let numbers = demon.match(patternForDamage);
        let operators = demon.match(patternForOperators);
        if (characters) {
            characters.forEach(ch => health += ch.charCodeAt());
        }
        if (numbers) {
            damage = numbers.map(Number).reduce((a, b) => a + b, 0);
        }
        if (operators) {
            operators.forEach(operators => operators === '*'
                ? damage *= 2
                : damage /= 2);
        }
        listOfDemons.push(`${demon} - ${health} health, ${damage.toFixed(2)} damage`)
    }
    listOfDemons.sort((a, b) => a.localeCompare(b)).forEach(demon => console.log(demon));
}
netherRealms('M3ph1st0**, Azazel')