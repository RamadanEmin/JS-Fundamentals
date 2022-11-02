function bunnyKill(input = []) {
    let bomb = input.pop().split(` `);
    let matrix = input.map(row => row.split(` `).map(Number));
    let damage = 0;
    let killCounter = 0;
    for (let i = 0; i < bomb.length; i++) {
        let [bombRow, bombCol] = bomb[i].split(`,`).map(Number);
        let bombValue = matrix[bombRow][bombCol];
        if (bombValue <= 0) {
            continue;
        }
        let startRow = Math.max(0, bombRow - 1);
        let endRow = Math.min(bombRow + 1, input.length - 1);
        for (let row = startRow; row <= endRow; row++) {
            let startCol = Math.max(0, bombCol - 1);
            let endCol = Math.min(bombCol + 1, input[row].length - 1);
            for (let col = startCol; col <= endCol; col++) {
                matrix[row][col] -= bombValue;
            }
        }
        killCounter++;
        damage += bombValue;
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) {
                damage += matrix[row][col];
                killCounter++;
            }
        }
    }
    console.log(damage);
    console.log(killCounter);
}
bunnyKill(
    ['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']

);