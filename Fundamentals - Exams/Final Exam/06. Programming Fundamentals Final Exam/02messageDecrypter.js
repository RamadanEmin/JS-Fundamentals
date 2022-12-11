function messageDecrypter(input) {
    const count = Number(input.shift());
    let valid;
    const pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<number1>\d+)\]\|\[(?<number2>\d+)\]\|\[(?<number3>\d+)\]\|$/g;
    for (let i = 0; i < count; i++) {
        valid = pattern.exec(input[i]);
        if (valid) {
            console.log(`${valid.groups.tag}: ${String.fromCharCode(valid.groups.number1, valid.groups.number2, valid.groups.number3)}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}
messageDecrypter([
    "4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
]);
// Request: Isi
// Valid message not found!
// Taggy: val
// Valid message not found!

messageDecrypter([
    "3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"
]);
// Valid message not found!
// Valid message not found!
// Valid message not found!