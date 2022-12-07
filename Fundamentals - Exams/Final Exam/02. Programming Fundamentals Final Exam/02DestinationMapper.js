function destinationMapper(text = '') {
    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let valid;
    let destinations = [];
    travelPoints = 0;
    while (valid = pattern.exec(text)) {
        destinations.push(valid.groups.destination);
        travelPoints += valid.groups.destination.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");