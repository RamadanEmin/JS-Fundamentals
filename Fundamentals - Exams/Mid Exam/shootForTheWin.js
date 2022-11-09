function shootForTheWin(input) {
    let target = input.shift().slice().split(` `).map(Number);
    let index = input.shift();
    let count = 0;
    while (index !== `End`) {
        count++;
      let  indexs = Number(index);
        if (indexs < 0 || indexs >= target.length||target[indexs] === -1) {
           count--;
            index = input.shift();
            continue;
        }
        let targets = target[indexs];
        for (let i = 0; i < target.length; i++) {
            target[indexs] = -1;
            if (targets < target[i] && target[i] !== -1) {
                target[i] -= targets;
            } else if (targets >= target[i] && target[i] !== -1) {
                target[i] += targets;
            }
        }
        index = input.shift();
    }
    console.log(`Shot targets: ${count} -> ${target.join(` `)}`);
}
shootForTheWin((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
);