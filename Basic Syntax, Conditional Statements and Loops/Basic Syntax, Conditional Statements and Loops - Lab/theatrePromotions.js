function theatrePromotions(typeOfDay, age) {
    let price = 0;
   let isErrro = false;
    switch (typeOfDay) {
        case "Weekday":
            if (age >= 0 && age <= 18) {
price = 12;
            } else if (age > 18 && age <= 64) {
                price = 18;
            }else if (age > 64 && age <= 122) {
                price = 12;
            } else {
                isErrro = true;
                console.log("Error!");
            }
            break;
        case "Weekend":
            if (age >= 0 && age <= 18) {
                price = 15;
            } else if (age > 18 && age <= 64) {
                price = 20;
            }else if (age > 64 && age <= 122) {
                price = 15;
            } else {
                isErrro = true;
                console.log("Error!");
            }
            break;
        case "Holiday":
            if (age >= 0 && age <= 18) {
                price = 5;
            } else if (age > 18 && age <= 64) {
                price = 12;
            }else if (age > 64 && age <= 122) {
                price = 10;
            } else {
                isErrro = true;
                console.log("Error!");
            }
            break;
    }
    if(!isErrro){
    console.log(`${price}$`);
}
}
theatrePromotions('Weekday', 42);