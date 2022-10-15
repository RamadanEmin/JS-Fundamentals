function reversedChars(character1, character2, character3) {
    if (typeof character1 === "string" && typeof character2 === "string" && typeof character3 === "string") {
        console.log(`${character3} ${character2} ${character1}`);
    } else {
        character1 = character1.toString();
        character2 = character2.toString();
        character3 = character3.toString();
        console.log(`${character3} ${character2} ${character1}`);
    }
}
reversedChars('A', 'B', 'C');