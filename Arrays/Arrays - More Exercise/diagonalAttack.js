function diagonalAttack(matrix = []) {
    matrix = matrix.map(row => row.split(' ').map(Number))
    let length = matrix.length;
    let sumPrimaryDiagonal = 0;
    let sumSecondaruDiagonal = 0;
    for (let i = 0; i < length; i++) {
        sumPrimaryDiagonal += matrix[i][i];
        sumSecondaruDiagonal += matrix[i][length - 1 - i];
    }
    let isDiagonal = (row, col) => row === col || col === matrix[row].length - 1 - row;
    if (sumPrimaryDiagonal === sumSecondaruDiagonal) {
        console.log(matrix.map((row, rowIndex) => row
            .map((e, colIndex) => isDiagonal(rowIndex, colIndex)
                ? e
                : sumPrimaryDiagonal)
            .join(' ')).join('\n'));
    } else {
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
}
diagonalAttack(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);