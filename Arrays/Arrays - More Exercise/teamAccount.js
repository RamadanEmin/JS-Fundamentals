function teamAccount(arr = []) {
    let games = arr.shift().split(' ')
    for (let i = 0; i < arr.length; i++) {
        let event = arr[i].split(' ')
        let command = event[0]
        let game = event[1]
        if (command === 'Install') {
   			 if (!games.includes(game)){ 
        		games.push(game);
    		}
        } else if (command === 'Uninstall') {
            if (games.includes(game)) {
                let index = games.indexOf(game)
                games.splice(index, 1)
            }
        } else if (command === 'Update') {
            if (games.includes(game)) {
                let index = games.indexOf(game)
                games.splice(index, 1)
                games.push(game)
            }
        } else if (command === 'Expansion') {
            game = game.split('-')
            let spiel = game[0]
            let exp = game[1]
            if (games.includes(spiel)) {
                let index = games.indexOf(spiel)
                games.splice(index + 1, 0, `${spiel}:${exp}`)
            }
        } else if (command === 'Play!') {
            console.log(games.join(' '));
            break;
        }
    }
}
teamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
);