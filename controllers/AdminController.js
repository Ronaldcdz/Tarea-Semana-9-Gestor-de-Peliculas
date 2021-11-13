
const MovieModel = require("../models/Movies");


// ACTION

exports.GetAddMovie = (req, res, next) => {

    const movies = MovieModel.GetAll();

    res.status(200).render("admin/add-movies",
        {
            pageTitle: "Agregar Pelicula",
            AddMovieActive: true,
            movies: movies
        });
}

exports.PostAddMovie = (req, res, next) => {

    res.status(302).redirect("/");
}