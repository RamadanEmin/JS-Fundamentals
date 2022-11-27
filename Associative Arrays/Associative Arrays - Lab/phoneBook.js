function phoneBook(input = []) {
    let phoneBook = {};
    for (let i = 0; i < input.length; i++) {
        let [name, phone] = input[i].split(` `);
        phoneBook[name] = phone;
    }
    let result = Object.keys(phoneBook).forEach(n => console.log(`${n} -> ${phoneBook[n]}`));
    return result;

    // for (const name in phoneBook) {
    //     console.log(`${name} -> ${phoneBook[name]}`);
    // }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);