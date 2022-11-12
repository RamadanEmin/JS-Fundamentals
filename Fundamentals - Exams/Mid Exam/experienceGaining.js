function experienceGaining(input = []) {
    let experienceNeeded = input.shift();
    let countOfBattles = input.shift();
    let builtExperience = 0;
    let isReachedExperience = false;
    let battle = 0;
    for (let i = 0; i < countOfBattles; i++) {
        battle++;
        if (battle % 15 === 0) {
            builtExperience += (input[i] * 1.05);
        } else if (battle % 5 === 0) {
            builtExperience += (input[i] * 0.90);
        } else if (battle % 3 === 0) {
            builtExperience += (input[i] * 1.15);
        } else {
            builtExperience += input[i];
        }
        if (builtExperience >= experienceNeeded) {
            isReachedExperience = true;
            console.log(`Player successfully collected his needed experience for ${battle} battles.`);
            break;
        }
    }
    if (!isReachedExperience) {
        console.log(`Player was not able to collect the needed experience, ${(experienceNeeded - builtExperience).toFixed(2)} more needed.`);
    }
}
experienceGaining([500, 5, 50, 100, 200, 100, 20]);
experienceGaining([500, 5, 50, 100, 200, 100, 30]);
experienceGaining([400, 5, 50, 100, 200, 100, 20]);