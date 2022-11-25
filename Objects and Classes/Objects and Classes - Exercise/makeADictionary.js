function makeADictionary(input = []) {
    let dictionary = {};
    for (let i = 0; i < input.length; i++) {
        let el = JSON.parse(input[i]);
        let property = Object.entries(el)[0];
        dictionary[property[0]] = property[1];
    }
    let sortedDictionary = {};
    for (let key of Object.keys(dictionary).sort((str1, str2) => str1.localeCompare(str2))) {
        sortedDictionary[key] = dictionary[key];
    }
    for (const term in sortedDictionary) {
        if (sortedDictionary.hasOwnProperty(term)) {
            let definition = sortedDictionary[term];
            console.log(`Term: ${term} => Definition: ${definition}`);
        }
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);