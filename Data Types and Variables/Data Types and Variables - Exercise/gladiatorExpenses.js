function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    /*  let total = 0;
        let brokenHelmets = 0;
        let brokenSwords = 0;
        let brokenShields = 0;
        let brokenArmors = 0;
        for (let i = 1; i <= lostFights; i++) {
            if (i % 12 === 0) {
                brokenArmors++;
            } if (i % 6 === 0) {
                brokenShields++;
            } if (i % 3 === 0) {
                brokenSwords++;
            } if (i % 2 === 0) {
                brokenHelmets++
            }
        }
        total = brokenHelmets * helmetPrice + brokenSwords * swordPrice + brokenShields * shieldPrice + brokenArmors * armorPrice;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);                                                                 */

    let brokenHelmets = Math.floor(lostFights / 2) * helmetPrice;
    let brokenSwords = Math.floor(lostFights / 3) * swordPrice;
    let brokenShields = Math.floor(lostFights / 6) * shieldPrice;
    let brokenArmors = Math.floor(lostFights / 12) * armorPrice;
    let total = brokenHelmets + brokenSwords + brokenShields + brokenArmors;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
gladiatorExpenses(7, 2, 3, 4, 5);