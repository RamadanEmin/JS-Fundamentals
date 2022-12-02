function palindromes(words = []) {
    let palindromes = [];
    for (const w of words) {
        let word = w.split(' ').join('');
        let reversedWord = word.split('').reverse().join('');
        if (word === reversedWord) {
            palindromes.push(word);
        }
    }
    if (palindromes.length > 0) {
        return palindromes.join(', ');
    } else {
        return `No palindromes found`;
    }
}
console.log(palindromes(['stella won no wallets', 'not a palindrome']));