function extractFile(input = '') {
    let file = input.substring(input.lastIndexOf('\\') + 1);
    let fileName = file.substring(0, file.lastIndexOf('.'));
    let extension = file.substring(file.lastIndexOf('.') + 1)
    return `File name: ${fileName}\nFile extension: ${extension}`;
}
console.log(extractFile('C:\\Internal\\training-internal\\Template.pptx'));