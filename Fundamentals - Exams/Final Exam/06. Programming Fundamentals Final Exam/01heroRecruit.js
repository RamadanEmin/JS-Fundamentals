function heroRecruit(input) {
    const heroes = {};
    const commands = {
        Enroll: (heroName) => {
            if (heroes[heroName]) {
                console.log(`${heroName} is already enrolled.`);
            } else {
                heroes[heroName] = [];
            }
        },
        Learn: (heroName, spellName) => {
            if (!heroes[heroName]) {
                console.log(`${heroName} doesn't exist.`);
                return;
            }
            if (heroes[heroName].includes(spellName)) {
                console.log(`${heroName} has already learnt ${spellName}.`);
                return;
            }
            heroes[heroName].push(spellName);
        },
        Unlearn: (heroName, spellName) => {
            if (!heroes[heroName]) {
                console.log(`${heroName} doesn't exist.`);
                return;
            }
            if (!heroes[heroName].includes(spellName)) {
                console.log(`${heroName} doesn't know ${spellName}.`);
                return;
            }
            const hero = heroes[heroName].indexOf(spellName);
            heroes[heroName].splice(hero, 1);
        }
    };

    while (input[0] !== 'End') {
        let [command, param1, param2] = input.shift().split(' ');
        commands[command](param1, param2);
    }
    if (input[0] === 'End') {
        console.log('Heroes:');
        for (const [name, spells] of Object.entries(heroes)) {
            console.log(`== ${name}: ${spells.join(', ')}`);
        }
    }
}
heroRecruit([
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Stefan Spell1",
    "Unlearn Stefan Spell1",
    "Learn Peter Dispel",
    "End"
]);