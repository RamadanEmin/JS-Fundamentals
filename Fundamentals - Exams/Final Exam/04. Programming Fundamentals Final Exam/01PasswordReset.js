function passwordReset(input = []) {
    let password = input.shift();
    function takeOdd(password) {
        password = password.split('').filter((el, index) => index % 2 !== 0).join('');
        console.log(password);
        return password;
    }
    function cut(password = '', index, length) {
        index = Number(index);
        length = Number(length);
        let substring = password.substring(index, index + length);
        password = password.replace(substring, '');
        console.log(password);
        return password;
    }
    function substitute(password = '', substring, substitute) {
        if (password.includes(substring)) {
            password = password.split(substring).join(substitute);
            console.log(password);
        } else {
            console.log("Nothing to replace!");
        }
        return password;
    }
    while (input[0] !== 'Done') {
        let [command, paramOne, paramTwo] = input.shift().split(' ');
        switch (command) {
            case 'TakeOdd':
                password = takeOdd(password);
                break;
            case 'Cut':
                password = cut(password, paramOne, paramTwo);
                break;
            case 'Substitute':
                password = substitute(password, paramOne, paramTwo);
                break;
        }
    }
    console.log(`Your password is: ${password}`);
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
