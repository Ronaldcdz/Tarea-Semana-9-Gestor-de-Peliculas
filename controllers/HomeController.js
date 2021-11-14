
const Movie = require("../models/Movies");
const MovieModel = require("../models/Movies");             //IMPORTANDO EL MODELO MOVIES PARA ACCEDER A SUS METODOS




exports.GetHome = (req, res, next) => {

    MovieModel.GetAll((movies) => {

        res.status(200).render("movies/home",
        {
            pageTitle: "Gestor de Pelicula",
            GetMovieActive: true,
            movies: movies,
            hasMovies: movies.length > 0
        });

    })
    
    
}

exports.GetMovie = (req, res, next) =>{

    const movieId = req.params.movieId;

    MovieModel.GetById(movieId, (movie) => {

        res.status(200).render("movies/details",
        {
            pageTitle: "Detalles de "+movie.name,
            movie: movie
        });

    })
}

exports.PostFilterByGender = (req, res, next) => {

    const gender = req.body.genderFilter.toString();
    const filterActive = true;

    MovieModel.FilterByGender(gender, (movie) => {


        res.status(200).render("movies/home",
        {
            pageTitle: "Filtrado por "+gender,
            moviesFiltered: movie,
            filterActive: filterActive,
            gender: gender,
            GetMovieActive: true,
            hasMoviesFiltered: movie.length > 0

        });

    })

}



