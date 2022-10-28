function palindromeIntegers(arr = []) {
    function isPalindrome(text) {
        let isPalindromeValue = true;
        let len = text.length;
        for (let i = 0; i < Math.floor(len / 2); i++) {
            if (text[i] !== text[len - 1 - i]) {
                isPalindromeValue = false;
                break;
            }
        }
        return isPalindromeValue;
    }
    for (let number of arr) {
        console.log(isPalindrome(number.toString()));
    }
}
palindromeIntegers([123, 323, 421, 121]);