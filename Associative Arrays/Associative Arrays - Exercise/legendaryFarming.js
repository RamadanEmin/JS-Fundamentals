function legendaryFarming(input = []) {
    let arr = input.split(` `);
    let keyMaterials = { fragments: 0, shards: 0, motes: 0 };
    let junkMaterials = {};
    let obtainedItem = ``;
    for (let i = 0; i < arr.length; i += 2) {
        let quantity = Number(arr[i]);
        let material = arr[i + 1].toLowerCase();
        if (material === `fragments` || material === `shards` || material === `motes`) {
            keyMaterials[material] += quantity;
        } else {
            if (junkMaterials[material] === undefined) {
                junkMaterials[material] = 0;
            }
            junkMaterials[material] += quantity;
        }
        if (keyMaterials.shards >= 250) {
            obtainedItem = `Shadowmourne`;
            keyMaterials.shards -= 250;
            break;
        } else if (keyMaterials.fragments >= 250) {
            obtainedItem = `Valanyr`;
            keyMaterials.fragments -= 250;
            break;
        } else if (keyMaterials.motes >= 250) {
            obtainedItem = `Dragonwrath`;
            keyMaterials.motes -= 250;
            break;
        }
    }
    console.log(`${obtainedItem} obtained!`);
    let sortedKeyMaterials = Object.entries(keyMaterials).sort((a, b) => {
        let result = b[1] - a[1];
        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;
    });
    for (const [material, quantity] of sortedKeyMaterials) {
        console.log(`${material}: ${quantity}`);
    }
    let sortedJunk = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [material, quantity] of sortedJunk) {
        console.log(`${material}: ${quantity}`);
    }
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');


