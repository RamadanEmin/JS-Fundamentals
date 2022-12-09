function needForSpeedIII(input = []) {
    let numberOfCars = +input.shift();
    let cars = {};
    let tankCapacity = 75;
    let maxMileage = 100000;
    let minMileage = 10000;
    let commands = {
        Drive: (car, distance, fuel) => {
            distance = Number(distance);
            fuel = Number(fuel);
            if (cars[car].fuel >= fuel) {
                cars[car].mileage += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                console.log("Not enough fuel to make that ride");
            }
            if (cars[car].mileage >= maxMileage) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
        },
        Refuel: (car, fuel) => {
            fuel = Number(fuel);
            if (cars[car].fuel < tankCapacity) {
                if (cars[car].fuel + fuel <= tankCapacity) {
                    cars[car].fuel += fuel;
                    console.log(`${car} refueled with ${fuel} liters`);
                } else {         
                    console.log(`${car} refueled with ${tankCapacity - cars[car].fuel} liters`);
                    cars[car].fuel = tankCapacity;
                }
            }
        },
        Revert: (car, kilometers) => {
            cars[car].mileage -= kilometers;
            if (cars[car].mileage < minMileage) {
                cars[car].mileage = minMileage;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    };
    for (let i = 0; i < numberOfCars; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        cars[car] = { mileage, fuel };
    }
    while (input[0] !== 'Stop') {
        let [command, car, paramOne, paramTwo] = input.shift().split(' : ');
        commands[command](car, paramOne, paramTwo);
    }
    for (const [car, data] of Object.entries(cars)) {
        console.log(`${car} -> Mileage: ${data.mileage} kms, Fuel in the tank: ${data.fuel} lt.`);
    }
}
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);