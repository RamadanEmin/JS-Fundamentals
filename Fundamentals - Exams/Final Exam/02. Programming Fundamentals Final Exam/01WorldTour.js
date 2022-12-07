function worldTour(commands = []) {
    let stop = commands.shift();
    function add(text = '', index, string) {
        index = Number(index);
        if (index >= 0 && index < text.length) {
            let start = text.substring(0, index);
            let end = text.substring(index);
            text = start + string + end;
        }
        return text;
    }
    function remove(text = '', startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        if (startIndex >= 0 && startIndex <= endIndex && endIndex < text.length) {
            let start = text.substring(0, startIndex);
            let end = text.substring(endIndex + 1);
            text = start + end;
        }
        return text;
    }
    function switchText(text = '', oldString, newString) {
        if (text.includes(oldString)) {
            text = text.split(oldString).join(newString);
        }
        return text;
    }
    for (let command of commands) {
        if (command === 'Travel') {
            break;
        }
        let [typesOfCommand, v1, v2] = command.split(':');
        switch (typesOfCommand) {
            case 'Add Stop':
                stop = add(stop, v1, v2);
                console.log(stop);
                break;
            case 'Remove Stop':
                stop = remove(stop, v1, v2);
                console.log(stop);
                break;
            case 'Switch':
                stop = switchText(stop, v1, v2);
                console.log(stop);
                break;
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stop}`);
}
worldTour([
    'Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'])
