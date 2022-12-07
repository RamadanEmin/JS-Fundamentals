function winningTicket(input = '') {
    let tickets = input.split(/[\s,]+/g);
    let pattern = /([@#$^])\1{5,9}/g;
    for (let ticket of tickets) {
        let ticketLength = ticket.length;
        if (ticketLength !== 20) {
            console.log('invalid ticket');
            continue;
        }
        let leftHalf = ticket.substring(0, ticket.length / 2);
        let rightHalf = ticket.substring(ticket.length / 2);
        let leftMatch = leftHalf.match(pattern);
        let rigthMatch = rightHalf.match(pattern);
        if (!leftMatch || !rigthMatch) {
            console.log(`ticket "${ticket}" - no match`);
            continue;
        }
        let leftMatchLength = leftMatch[0].length;
        let rigthMatchLength = rigthMatch[0].length;
        let matchSymbol = leftMatch[0][0];
        if (leftMatchLength === 10 && rigthMatchLength === 10) {
            console.log(`ticket "${ticket}" - 10${matchSymbol} Jackpot!`);
        } else {
            console.log(`ticket "${ticket}" - ${Math.min(leftMatchLength, rigthMatchLength)}${matchSymbol}`);
        }
    }
}
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey')
