function reverseString(str) {
    let word = String(str);
    let rev = word.split(``).reverse();
    console.log(rev.join(``));
}
reverseString("SoftUni");