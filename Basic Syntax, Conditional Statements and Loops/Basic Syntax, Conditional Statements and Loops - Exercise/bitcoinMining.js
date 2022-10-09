function bitcoinMining(input) {
    let goldValue = 67.51
    let bitcoinValue = 11949.16;
    let bitcoinCount = 0;
    let totalMoney = 0;
    let firstDay = 0;
    for (let i = 1; i <= input.length; i++) {
        let goldMined = input[i - 1];
        if (i % 3 === 0) {
            goldMined *= 0.70;
        }
        totalMoney += goldMined * goldValue;
        if (totalMoney >= bitcoinValue) {
            if (firstDay === 0) {
                firstDay = i;
            }
            bitcoinCount += Math.floor(totalMoney / bitcoinValue);
            totalMoney %= bitcoinValue;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (firstDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);