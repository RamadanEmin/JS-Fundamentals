function carWash(command = []) {
    let sum = 0;
    for (const type of command) {
        switch (type) {
            case `soap`: sum += 10;
                break;
            case `water`: sum *= 1.20;
                break;
            case `vacuum cleaner`: sum *= 1.25;
                break;
            case `mud`: sum *= 0.90;
                break;
        }
    }
    console.log(`The car is ${sum.toFixed(2)}% clean.`);
}
/*function carWash(input) {
    let value = 0;
    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.10;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'soap') {
            value = soap(value);
        } else if (input[i] === 'water') {
            value = water(value);
        } else if (input[i] === 'vacuum cleaner') {
            value = vacuum(value);
        } else {
            value = mud(value);
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}                                                           */
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
