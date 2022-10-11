function vacation(people, typeOfGroup, dayOfWeek) {
    let price = 0;
    switch (typeOfGroup) {
        case "Students":
            switch (dayOfWeek) {
                case "Friday": price = people * 8.45;
                    break;
                case "Saturday": price = people * 9.80;
                    break;
                case "Sunday": price = people * 10.46;
                    break;
            }
            if (people >= 30) {
                price *= 0.85;
            }
            break;
        case "Business":
            if (people >= 100) {
                people -= 10;
            }
            switch (dayOfWeek) {
                case "Friday": price = people * 10.90;
                    break;
                case "Saturday": price = people * 15.60;
                    break;
                case "Sunday": price = people * 16;
                    break;
            }
            break;
        case "Regular":
            switch (dayOfWeek) {
                case "Friday": price = people * 15;
                    break;
                case "Saturday": price = people * 20;
                    break;
                case "Sunday": price = people * 22.50;
                    break;
            }
            if (people >= 10 && people <= 20) {
                price *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday")
