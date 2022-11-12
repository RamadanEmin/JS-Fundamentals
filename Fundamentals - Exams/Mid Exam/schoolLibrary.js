function schoolLibrary(input = []) {
    let books = input.shift().slice().split('&').filter(x => x !== '');
    let commands = input.shift();
    while (commands !== 'Done') {
        let [command, param1, param2] = commands.split(' | ');
        switch (command) {
            case 'Add Book':
                if (!books.includes(param1)) {
                    books.unshift(param1);
                }
                break;
            case 'Take Book':
                if (books.includes(param1)) {
                    let index = books.indexOf(param1);
                    books.splice(index, 1);
                }
                break;
            case 'Swap Books':
                if (books.includes(param1) && books.includes(param2)) {
                    let index1 = books.indexOf(param1);
                    let index2 = books.indexOf(param1);
                    let temp = '';
                    temp = books[index1];
                    books[index1] = books[index2];
                    books[index2] = temp;
                }

                break;
            case 'Insert Book':
                if (!books.includes(param1)) {
                    books.push(param1);
                }
                break;
            case 'Check Book':
                param1 = Number(param1);
                if (0 <= param1 && param1 < books.length) {
                    console.log(books[param1]);
                }
                break;
        }
        commands = input.shift();
    }
    console.log(books.join(', '));
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"]);

schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]);

schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"]);