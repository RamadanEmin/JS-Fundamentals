function buildAWall(wall = []) {
    let totalUsedConcrete = [];
    let totalPrice = 0;
    let isComplete = false;
    while (!isComplete) {
        isComplete = true;
        let currentUsedConcrete = 0;
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i]++;
                currentUsedConcrete += 195;
                isComplete = false;
            }
        }
        if (!isComplete) {
            totalUsedConcrete.push(currentUsedConcrete);
            totalPrice += currentUsedConcrete * 1900;
        }
    }
    console.log(`${totalUsedConcrete.join(`, `)}`);
    console.log(`${totalPrice} pesos`);
}
buildAWall([17, 22, 17, 19, 17]);