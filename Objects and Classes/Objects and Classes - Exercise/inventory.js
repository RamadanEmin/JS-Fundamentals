function inventory(input = []) {
    let heroes = [];
    while (input.length) {
        let incomingData = input.shift();
        let [heroName, heroLevel, item] = incomingData.split(` / `);
        let items = [];
        items = item;
        let hero = {
            hero: heroName,
            level: heroLevel,
            items: items
        }
        heroes.push(hero);
    }
    heroes.sort((hero1, hero2) => hero1.level - hero2.level);
    let output = [];
    for (const hero of heroes) {
        let str = `Hero: ${hero.hero}\nlevel => ${hero.level}\nitems => ${hero.items}`
        output.push(str);
    }
    return output.join(`\n`);
}
console.log(inventory(
    ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));