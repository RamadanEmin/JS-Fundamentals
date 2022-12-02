function modernTimes(input = '') {
    // let words = input.split(' ');
    // let output = [];
    function hasOnlyLetters(word) {
        for (let i = 0; i < word.length; i++) {
            if ((word.charCodeAt(i) < 65 || 90 < word.charCodeAt(i)) &&
                (word.charCodeAt(i) < 97 || 122 < word.charCodeAt(i))) {
                return false;
            }
        }
        return true;
    }

    function isValid(word) {
        if (word.startsWith('#') && word.length > 1 && hasOnlyLetters(word.substring(1))) {
            return true;
        }
        return false;
    }

    // words.forEach(word => {
    //     if (isValid(word)) {
    //         output.push(word.slice(1));
    //     }
    // });
    // return output.join('\n');

    return input.split(' ').filter(isValid).map(word=>word.slice(1)).join('\n');
}
console.log(modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign'));