function nxNMatrix(number) {
    /*    let buff = "";
        for (let i = 0; i < number; i++) {
            for (let j = 1; j < number; j++) {
                buff += number + " ";
            }
            buff += number + "\n";
        }
        console.log(buff);                   */
    let col = '';
    for (let i = 0; i < number; i++) {
        col += number + ' ';
    }
    row = col + '\n'
    console.log(row.repeat(number));
}
nxNMatrix(7);