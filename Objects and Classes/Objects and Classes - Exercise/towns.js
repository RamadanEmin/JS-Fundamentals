function towns(input = []) {
    for (let i = 0; i < input.length; i++) {
        let [town, latitude, longitude] = input[i].split(` | `);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let towns = {
            town,
            latitude,
            longitude
        };
        console.log(towns);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);