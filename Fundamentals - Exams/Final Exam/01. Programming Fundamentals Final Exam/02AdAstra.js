function adAstra(input = []) {
    let text = input.join('');
    let pattern = /([|#])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let valid;
    let items = [];
    kcalForADay = 2000;
    let totalCalories = 0;
    while (valid = pattern.exec(text)) {
        totalCalories += Number(valid.groups.calories);
        items.push(`Item: ${valid.groups.itemName}, Best before: ${valid.groups.expirationDate}, Nutrition: ${valid.groups.calories}`);
    }
    let days = Math.trunc(totalCalories / kcalForADay);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(items.join('\n'));
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])