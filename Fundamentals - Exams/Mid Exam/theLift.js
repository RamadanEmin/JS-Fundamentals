function theLift(input) {
    let people = Number(input[0]);
    let wagons = input[1].split(` `).map(Number);
    let result = wagons.slice(0);
    let isEmpty = false;
    for (let i = 0; i < wagons.length; i++) {
        let lift = wagons[i];
        if (isEmpty) {
            break;
        }
        while (lift < 4) {
            if (people <= 0) {
                console.log("The lift has empty spots!");
                isEmpty = true;
                break;
            }
            lift++;
            people--;
        }
        result[i] = lift;
    }
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    console.log(result.join(` `));
}
theLift(["20","0 2 0"]);