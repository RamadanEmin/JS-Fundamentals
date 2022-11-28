function aMinerTask(input = []) {
    let resources = {};
    for (let i = 0; i < input.length; i += 2) {
        let resourceName = input[i];
        let quantity = Number(input[i + 1]);
        if (!resources.hasOwnProperty(resourceName)) {
            resources[resourceName] = 0;
        }
        resources[resourceName] += quantity;
    }
    for (const resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`);
    }
}
aMinerTask([
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15'
]);
