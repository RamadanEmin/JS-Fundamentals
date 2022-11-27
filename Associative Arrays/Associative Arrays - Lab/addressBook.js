function addressBook(input = []) {
    let addressBook = {};
    for (const line of input) {
        let [name, address] = line.split(`:`);
        addressBook[name] = address;
    }
    let sortedAddress = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));
    for (const address of sortedAddress) {
        console.log(`${address[0]} -> ${address[1]}`);
    }
}
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);
