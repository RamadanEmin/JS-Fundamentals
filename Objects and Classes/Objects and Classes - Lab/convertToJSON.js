function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };
    let JSONdata = JSON.stringify(person);
    console.log(JSONdata);
}
convertToJSON('George', 'Jones', 'Brown');