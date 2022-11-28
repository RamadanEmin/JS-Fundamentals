function oddOccurrences(input = ``) {
    let oddOccurrence = new Map();
    let output = [];
    let occurrence = input.toLocaleLowerCase().split(` `);
    occurrence.forEach(word => {
        if (!oddOccurrence.has(word)) {
            oddOccurrence.set(word, 0);
        }
        oddOccurrence.set(word, oddOccurrence.get(word) + 1);
    });
    Array.from(oddOccurrence.entries())
        .forEach(entry => {
            if (entry[1] % 2 !== 0) {
                output.push(entry[0]);
            }
        });
    return output.join(` `);
}
console.log(oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));