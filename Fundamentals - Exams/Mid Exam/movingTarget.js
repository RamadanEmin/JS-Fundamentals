function movingTarget(input = []) {
    let target = input.shift().slice().split(` `).map(Number);
    let commands = input.shift();
    while (commands !== `End`) {
        let [command, index, value] = commands.split(` `);
        index = Number(index);
        value = Number(value);
        switch (command) {
            case `Shoot`:
                if (index < 0 || index >= target.length) {
                    commands = input.shift();
                    continue;
                }
                target[index] -= value;
                if (target[index] <= 0) {
                    target.splice(index, 1);
                }
                break;
            case `Add`:
                if (index < 0 || index >= target.length) {
                    console.log("Invalid placement!");
                    commands = input.shift();
                    continue;
                }
                target.splice(index, 0, value);
                break;
            case `Strike`:
                if (index - value < 0 || index + value >= target.length) {
                    console.log("Strike missed!");
                } else {
                    target.splice(index - value, value * 2 + 1)
                }
                break;
        }
        commands = input.shift();
    }
    console.log(target.join(`|`));
}
movingTarget(
    ["52 74 23 44 96 110",
        "Shoot 5 10",
        "Shoot 1 80",
        "Strike 2 1",
        "Add 22 3",
        "End"]);