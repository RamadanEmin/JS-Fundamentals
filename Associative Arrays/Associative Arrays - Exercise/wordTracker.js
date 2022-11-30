function wordTracker(input = []) {
    let words = {};
    let targetWords = input.shift().split(` `);
    targetWords.forEach(word => words[word] = 0);
    input.forEach(word => {
        if (targetWords.includes(word)) {
            words[word] += 1;
        }
    })
    Object.entries(words)
        .sort((a, b) => b[1] - a[1])
        .forEach(entry => console.log(`${entry[0]} - ${entry[1]}`));
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);