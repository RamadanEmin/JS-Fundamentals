function phoneShop(input) {
    let phones = input.shift().slice().split(', ');
    let commands = input.shift();
    while (commands !== 'End') {
        let [command, param1] = commands.split(' - ').filter(x => x !== '');
        switch (command) {
            case 'Add':
                if (!phones.includes(param1)) {
                    phones.push(param1);
                }
                break;
            case 'Remove':
                if (phones.includes(param1)) {
                    let index = phones.indexOf(param1);
                    phones.splice(index, 1);
                }
                break;
            case 'Bonus phone':
                let [oldPhone, newPhone] = param1.split(':');
                if (phones.includes(oldPhone)) {
                    let index = phones.indexOf(oldPhone);
                    phones.splice(index + 1, 0, newPhone);
                }
                break;
            case 'Last':
                if (phones.includes(param1)) {
                    let index = phones.indexOf(param1);
                    let lastPhone = phones.slice(index, 1);
                    phones.splice(index, 1);
                    phones.push(lastPhone);
                }
                break;
        }
        commands = input.shift();
    }
    console.log(phones.join(', '));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]);
phoneShop(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"]);
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]);