function manageMovies(commands) {
    let movies = [];

    for (currentMovie of commands) {
        if (currentMovie.startsWith('addMovie')) {
            let movieName = currentMovie.substring(9);
            movies.push({ name: movieName});
        } else if (currentMovie.includes(' directedBy ')) {
            let [movieName, movieDirector] = currentMovie.split(' directedBy ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = movieDirector;
            }
        } else if (currentMovie.includes(' onDate ')) {
            let [movieName, movieDate] = currentMovie.split(' onDate ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = movieDate;
            }
        }
    }

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

manageMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
