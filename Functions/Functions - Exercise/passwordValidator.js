function passwordValidator(password) {
    function isValidPassLength(passLength) {
        let isValid = true;
        if (passLength < 6 || 10 < passLength) {
            isValid = false;
        }
        return isValid;
    }
    function isBetweenRange(ch, start, end) {
        return start.charCodeAt(0) <= ch.charCodeAt(0) && ch.charCodeAt(0) <= end.charCodeAt(0);
    }
    function containsOnlyLettersAndDigits(password) {
        let isValid = true;
        for (let ch of password) {
            if (!(
                isBetweenRange(ch, `A`, `Z`) ||
                isBetweenRange(ch, `a`, `z`) ||
                isBetweenRange(ch, `0`, `9`))
            ) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }
    function containsLeastTwoDigits(password) {
        let digitCounter = 0;
        for (let ch of password) {
            if (isBetweenRange(ch, `0`, `9`)) {
                digitCounter++;
                if (digitCounter === 2) {
                    break;
                }
            }
        }
        return digitCounter === 2 ? true : false;
    }
    let isValidPassLengthVal = isValidPassLength(password.length);
    if (!isValidPassLengthVal) {
        console.log("Password must be between 6 and 10 characters");
    }

    let containsOnlyLettersAndDigitsVal = containsOnlyLettersAndDigits(password);
    if (!containsOnlyLettersAndDigitsVal) {
        console.log("Password must consist only of letters and digits");
    }

    let containsLeastTwoDigitsVal = containsLeastTwoDigits(password);
    if (!containsLeastTwoDigitsVal) {
        console.log("Password must have at least 2 digits");
    }

    if (isValidPassLengthVal && containsOnlyLettersAndDigitsVal && containsLeastTwoDigitsVal) {
        console.log("Password is valid");
    }
}
passwordValidator('MyPass123');