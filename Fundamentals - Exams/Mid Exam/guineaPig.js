function guineaPig(input = []) {
    let quantityFood = Number(input[0]) * 1000;
    let quantityHay = Number(input[1]) * 1000;
    let quantityCover = Number(input[2]) * 1000;
    let pigWeight = Number(input[3]) * 1000;
    let cover = pigWeight / 3;
    let isEnough = true;
    for (let i = 1; i < 31; i++) {
        quantityFood -= 300;
        if (i % 2 === 0) {
            let hay = quantityFood * 0.05;
            quantityHay -= hay;
        }
        if (i % 3 === 0) {
            quantityCover -= cover;
        }
        if (quantityFood <= 0 || quantityHay <= 0 || quantityCover <= 0) {
            console.log("Merry must go to the pet store!");
            isEnough = false;
            break;
        }
    }
    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFood / 1000).toFixed(2)}, Hay: ${(quantityHay / 1000).toFixed(2)}, Cover: ${(quantityCover / 1000).toFixed(2)}.`);
    }
}
guineaPig(["10", "5", "5.2", "1"]);