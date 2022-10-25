function charactersInRange(startCharacters, endCharacters) {
    let buff = "";
    let start = startCharacters.charCodeAt();
    let end = endCharacters.charCodeAt();
    if (start > end) {
        let temp = end;
        end = start;
        start = temp;
    }
    for (let i = start + 1; i < end; i++) {
        buff += String.fromCharCode(i) + ` `;
    }
    console.log(buff);
}
charactersInRange('#', ':');