function arenaTier(input = []) {
    let gladiators = {};
    for (const line of input) {
        if (line === `Ave Cesar`) {
            break;
        }
        let tokens = line.split(` `);
        let technique = tokens[2];
        let skill = Number(tokens[4]);
        let separator = tokens[1];
        let firstGladiator = tokens[0];
        let secondGladiator = tokens[2];
        if (separator === `->`) {
            if (!gladiators.hasOwnProperty(firstGladiator)) {
                gladiators[firstGladiator] = {
                    techniques: {},
                    totalSkillPoints: 0
                };
            }
            if (!gladiators[firstGladiator].techniques.hasOwnProperty(technique)) {
                gladiators[firstGladiator][`techniques`][technique] = skill;
                gladiators[firstGladiator].totalSkillPoints += skill;
            } else if (gladiators[firstGladiator][`techniques`][technique] < skill) {
                gladiators[firstGladiator].totalSkillPoints += skill - gladiators[firstGladiator][`techniques`][technique];
                gladiators[firstGladiator][`techniques`][technique] = skill;

            }
        } else if (separator === `vs`) {
            if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                let hasCommonTechnique = false;
                let firstTechiques = Object.keys(gladiators[firstGladiator][`techniques`]);
                let secondTechiques = Object.keys(gladiators[secondGladiator][`techniques`]);
                for (const t of firstTechiques) {
                    if (secondTechiques.includes(t)) {
                        hasCommonTechnique = true;
                        break;
                    }
                }
                if (hasCommonTechnique) {
                    if (gladiators[firstGladiator].totalSkillPoints > gladiators[secondGladiator].totalSkillPoints) {
                        delete gladiators[secondGladiator];
                    } else if (gladiators[firstGladiator].totalSkillPoints < gladiators[secondGladiator].totalSkillPoints) {
                        delete gladiators[firstGladiator];
                    }
                }
            }
        }
    }
    let sortedGladiators = Object.entries(gladiators).sort((a, b) => {
        let result = b[1].totalSkillPoints - a[1].totalSkillPoints;
        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;
    });
    for (const sorted of sortedGladiators) {
        let gladiatorName = sorted[0];
        let totalSkillPoints = sorted[1].totalSkillPoints;
        console.log(`${gladiatorName}: ${totalSkillPoints} skill`);
        let sortedTechniques = Object.entries(sorted[1].techniques).sort((a, b) => {
            let result = b[1] - a[1];
            if (result === 0) {
                result = a[0].localeCompare(b[0]);
            }
            return result;
        });
        for (const [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);