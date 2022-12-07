function santaSecretHelper(messages = []) {
    let key = +messages.shift();
    let pattern = /@(?<name>[A-Za-z]+)[^@!:>-]*!(?<behavior>G)!/;
    for (const message of messages) {
        if (message === 'end') {
            break;
        }
        let decryption = message.split('').map(ch => String.fromCharCode(ch.charCodeAt() - key)).join('');
        let childWithGoodBehavior = pattern.exec(decryption);
        if (childWithGoodBehavior) {
            console.log(childWithGoodBehavior.groups.name);
        }
    }
}
santaSecretHelper([
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'])