function heartDelivery(input = []) {
    let neighborhood = input.shift().slice().split(`@`).map(Number);
    let commands = input.shift();
    let index = 0;
    let valentineCounter = 0;
    while (commands !== `Love!`) {
        let token = commands.split(` `);
        let jumpLength = Number(token[1]);
        if (index + jumpLength < neighborhood.length) {
            index += jumpLength;
            if (neighborhood[index] !== 0) {
                neighborhood[index] -= 2;
                if (neighborhood[index] === 0) {
                    valentineCounter++;
                    console.log(`Place ${index} has Valentine's day.`);
                }
            } else {
                console.log(`Place ${index} already had Valentine's day.`);
            }
        } else {
            index = 0;
            if (neighborhood[index] !== 0) {
                neighborhood[index] -= 2;
                if (neighborhood[index] === 0) {
                    valentineCounter++;
                    console.log(`Place ${index} has Valentine's day.`);
                }
            } else {
                console.log(`Place ${index} already had Valentine's day.`);
            }
        }
        commands = input.shift();
    }
    console.log(`Cupid's last position was ${index}.`);
    if (neighborhood.length === valentineCounter) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${neighborhood.length - valentineCounter} places.`);
    }
}
heartDelivery(["2@4@2","Jump 2","Jump 2","Jump 8","Jump 3","Jump 1","Love!"]);