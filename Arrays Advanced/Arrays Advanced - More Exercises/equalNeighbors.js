function equalNeighbors(matrix) {
    let neighbors = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    neighbors++;
                }
            }
            if (col < matrix[row].length - 1) {
                if (matrix[row][col] === matrix[row][col + 1]) {
                    neighbors++;
                }
            }
        }
    }
    return neighbors;
}
console.log(equalNeighbors(
    [['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']]
));