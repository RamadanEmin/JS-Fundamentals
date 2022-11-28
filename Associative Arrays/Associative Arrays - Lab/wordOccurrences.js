function wordOccurrences(words = []) {
    let occurrence = new Map();
    for (const word of words) {
        let count = 1;
        if (occurrence.has(word)) {
            count = occurrence.get(word) + 1;
        }
        occurrence.set(word, count)
    }
    let sortedOccutence = Array
        .from(occurrence.entries())
        .sort((a, b) => b[1] - a[1]);
    for (const [word, count] of sortedOccutence) {
        console.log(`${word} -> ${count} times`);
    }
}
wordOccurrences([
    "Here", "is", "the", "first", "sentence", "Here", "is",
    "another", "sentence", "And", "finally", "the", "third", "sentence"
]);