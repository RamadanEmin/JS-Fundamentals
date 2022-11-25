function movies(input = []) {
    let movies = [];
    while (input.length) {
        let line = input.shift();
        let tokens = line.split(` `);
        if (tokens.includes(`addMovie`)) {
            tokens.shift();
            let movieName = tokens.join(` `);
            let movie = { name: movieName };
            movies.push(movie);
        } else if (tokens.includes(`directedBy`)) {
            let index = tokens.indexOf(`directedBy`);
            let movieName = tokens.slice(0, index).join(` `);
            let directorName = tokens.slice(index + 1).join(` `);
            for (const movie of movies) {
                if (movie.name === movieName) {
                    movie.director = directorName;
                }
            }
        } else if (tokens.includes(`onDate`)) {
            let index = tokens.indexOf(`onDate`);
            let movieName = tokens.slice(0, index).join(` `);
            let date = tokens.slice(index + 1).join(` `);
            for (const movie of movies) {
                if (movie.name === movieName) {
                    movie.date = date;
                }
            }
        }
    }
    for (const movie of movies) {
        if (Object.keys(movie).includes(`name`)
            && Object.keys(movie).includes(`director`)
            && Object.keys(movie).includes(`date`)) {
            console.log(JSON.stringify(movie));
        }
    }
}
movies(
    ['addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen']);