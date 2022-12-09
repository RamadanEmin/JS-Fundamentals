function heroesOfCodeAndLogicVII(input = []) {
    let heroes = {};
    let maxHealth = 100;
    let maxMana = 200;
    let numberOfHeroes = Number(input.shift());
    let commands = {
        CastSpell: (heroName, mPNeeded, spellName) => {
            mPNeeded = Number(mPNeeded);
            if (heroes[heroName].mP >= mPNeeded) {
                heroes[heroName].mP -= mPNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mP} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        },
        TakeDamage: (heroName, damage, attacker) => {
            damage = Number(damage);
            heroes[heroName].hP -= damage;
            if (heroes[heroName].hP > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hP} HP left!`);
            } else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        },
        Recharge: (heroName, amount) => {
            amount=Number(amount);
            if (heroes[heroName].mP + amount > maxMana) {
                console.log(`${heroName} recharged for ${maxMana - heroes[heroName].mP} MP!`);
                heroes[heroName].mP = maxMana;
            } else {
                heroes[heroName].mP += amount;
                console.log(`${heroName} recharged for ${amount} MP!`);
            }
        },
        Heal: (heroName, amount) => {
            amount=Number(amount);
            if (heroes[heroName].hP + amount > maxHealth) {
                console.log(`${heroName} healed for ${maxHealth - heroes[heroName].hP} HP!`);
                heroes[heroName].hP = maxHealth;
            } else {
                heroes[heroName].hP += amount;
                console.log(`${heroName} healed for ${amount} HP!`);
            }
        }
    };
    for (let i = 0; i < numberOfHeroes; i++) {
        let [heroName, hP, mP] = input.shift().split(' ');
        hP=Number(hP);
        mP=Number(mP);
        heroes[heroName] = { hP, mP };
    }
    while (input[0] !== 'End') {
        let [command, paramOne, paramTwo, paramThree] = input.shift().split(' - ');
        commands[command](paramOne, paramTwo, paramThree);
    }
    for (const [hero, data] of Object.entries(heroes)) {
        console.log(`${hero}\n HP: ${data.hP}\n MP: ${data.mP}`);
    }
}
heroesOfCodeAndLogicVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])