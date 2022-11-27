function flightSchedule(input = []) {
    let flights = [];
    let initialData = input[0];
    let changedStatuses = input[1];
    let statusToDisplay = input[2][0];
    for (const data of initialData) {
        let tokens = data.split(` `);
        let sector = tokens[0];
        let destination = tokens.slice(1).join(` `);
        let currentFlight = {
            sector: sector,
            destination: destination,
            status: "Ready to fly"
        };
        flights.push(currentFlight);
    }
    for (const data of changedStatuses) {
        let tokens = data.split(` `);
        let sector = tokens[0];
        let status = tokens[1];
        for (const flight of flights) {
            if (flight.sector === sector) {
                flight.status = status;
            }
        }
    }
    for (const flight of flights) {
        if (flight.status === statusToDisplay) {
            console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
        }
    }
}
flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']
]);