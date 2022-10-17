function townInfo(town, population, area) {
    if (typeof town === `string` && typeof population === `number` && typeof area === `number`) {
        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
    } else {
        town = town.toString();
        population = Number(population);
        area = Number(area);
        if (isNaN(population) || isNaN(area)) {
            console.log(`Invalid input`);
        } else {
            console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
        }
    }
}
townInfo('Sofia', 1286383, `r`);