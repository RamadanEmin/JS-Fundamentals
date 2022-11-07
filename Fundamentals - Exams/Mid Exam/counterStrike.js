function counterStrike(input = []) {
    let initialEnergy = Number(input[0]);
    let won = 0;
    let isWon = true;
    for (let i = 1; i < input.length; i++) {
        if (input[i] === `End of battle`) {
            break;
        } else {
            let distance = Number(input[i]);
            if (initialEnergy >= distance) {
                initialEnergy -= distance;
                won++;
            } else {
                isWon = false;
                console.log(`Not enough energy! Game ends with ${won} won battles and ${initialEnergy} energy`);
                break;
            }
        }
        if (won % 3 === 0) {
            initialEnergy += won;
        }
    }
    if (isWon) {
        console.log(`Won battles: ${won}. Energy left: ${initialEnergy}`);
    }
}
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);