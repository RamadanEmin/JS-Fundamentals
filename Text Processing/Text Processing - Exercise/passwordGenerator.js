function passwordGenerator(input = []) {
    let password = (input[0].concat(input[1])).toLowerCase().split('');
    let replacementChars = input[2].toUpperCase().split('');
    for (const ch in password) {
        let char = password[ch];
        if (char === 'a' || char === 'e' || char === 'u' || char === 'o' || char === 'i') {
            let replacement = replacementChars.shift();
            replacementChars.push(replacement);
            password[ch] = replacement;
        }
    }
    return `Your generated password is ${password.reverse().join('')}`;
}
console.log(passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']));