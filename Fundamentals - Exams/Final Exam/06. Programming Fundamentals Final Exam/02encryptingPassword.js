function encryptingPassword(input) {
    const count = Number(input.shift());
    let valid;
    const pattern = /(.+)>(?<numbers>\d{3})(\|)(?<lower>[a-z]{3})\3(?<upper>[A-Z]{3})\3(?<symbols>[^<>]{3})<\1/g;
    for (let i = 0; i < count; i++) {
        valid = pattern.exec(input[i]);
        if (valid) {
            console.log(`Password: ${valid.groups.numbers + valid.groups.lower + valid.groups.upper + valid.groups.symbols}`);
        } else {
            console.log('Try another password!');
        }
    }
}
encryptingPassword(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"
]);
// Password: 111mquBAUmqu
// Try another password!
// Password: 088abcAAA***
// Try another password!
// Try another password!

encryptingPassword([
    "3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"
]);
// Try another password!
// Password: 123yesYES!!!
// Try another password!