function fancyBarcodes(input = []) {
    let pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
    let digitPattern = /\d/g;
    let valid;
    let numberOfBarcodes = +input.shift();
    for (let i = 0; i < numberOfBarcodes; i++) {
        valid = input[i].match(pattern);
        if (valid) {
            let digits = valid.join('').match(digitPattern);
            let productGroup = digits ? digits.join('') : '00';
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
