function emojiDetector(input = []) {
    let text = input[0];
    let coolEmojis = [];
    let counter = 0;
    let valid;
    let pattern = /(\*\*|::)([A-Z][a-z]{2,})\1/g;
    let digitPattern = /\d/g;
    let coolThreshold = text.match(digitPattern);
    let coolThresholdSum = coolThreshold.map(Number).reduce((a, b) => a * b, 1);
    while (valid = pattern.exec(text)) {
        counter++;
        let digitSum = valid[2].split('').map(ch => ch.charCodeAt()).reduce((a, b) => a + b, 0);
        if (digitSum > coolThresholdSum) {
            coolEmojis.push(valid[0]);
        }
    }
    console.log(`Cool threshold: ${coolThresholdSum}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join('\n'));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])