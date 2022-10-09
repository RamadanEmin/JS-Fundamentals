function login(input) {
    let username = input.shift();
    let pass = username.split(``).reverse().join(``);
    let isLoged = false;
    let counter = 0;
    for (let i = 1; i < input.length; i++) {
        counter++;
        let current = input[i];
        if (current === pass) {
            isLoged = true;
            console.log(`User ${username} logged in.`);
            break;
        }
        if(counter>3){
            break;
        }
        console.log(`Incorrect password. Try again.`);
    }
    if (!isLoged) {
        console.log(`User ${username} blocked!`);
    } 
}
login(['sunny','rainy','cloudy','sunny','not sunny']);
