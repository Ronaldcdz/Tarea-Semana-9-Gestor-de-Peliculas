
const MovieModel = require("../models/Movies");             //IMPORTANDO EL MODELO MOVIES PARA ACCEDER A SUS METODOS




// ACTION                       LOS CONTROLADRES SE ENCARGAN DE REALIZAR ACCIONES Y RETORNARLOS CON LAS VISTAS
//                              RENDERIZADAS

exports.GetIndex = (req, res, next) => {                //CONTROLADOR QUE SE ENCARGA DE DEVOLVER LA VISTA CON LAS PELICULAS
                                                        // CON LA OPCION DE EDITARLAS
    MovieModel.GetAll((movies) => {

        res.status(200).render("admin/index",
        {
            pageTitle: "Peliculas",
            AdminIndexMovieActive: true,
            movies: movies,
            hasMovies: movies.length > 0

        }); 
    })


   
    
    
}

exports.GetAddMovie = (req, res, next) => {

    res.status(200).render("admin/add-movies",
        {
            pageTitle: "Agregar Pelicula",
            AddMovieActive: true,
        }); 

    
}

exports.PostAddMovie = (req, res, next) => {


    const name = req.body.name;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const gender = req.body.gender;

    let trueOrFalse;

    if(req.body.selectActive == "Si") {trueOrFalse = true;}
    else{trueOrFalse = false;} 

    const active = trueOrFalse;

    const movie = new MovieModel(null, name, description, imageUrl, gender, active);
    movie.Save();

    res.redirect("/");
}



exports.GetEditMovie = (req, res, next) => {

    const editMode = req.query.editMode;
    const movieId = req.params.movieId;


    if(!editMode) {
        
        res.status(302).redirect("/");
    }


    MovieModel.GetById(movieId, (movie) => {



        res.status(200).render("admin/add-movies",
        {
            pageTitle: "Editar Pelicula",
            editMode: editMode,
            movie: movie
        }); 

    })

    
    
}

exports.PostEditMovie = (req, res, next) => {

    const id = req.body.movieId;
    const name = req.body.name;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const gender = req.body.gender;

    let trueOrFalse;

    if(req.body.selectActive == "Si") {trueOrFalse = true;}
    else{trueOrFalse = false;} 

    const active = trueOrFalse;

    const movie = new MovieModel(id, name, description, imageUrl, gender, active);
    movie.Save();

    res.redirect("/");
}


exports.PostDeleteMovie = (req, res, next) => {

    const id = req.body.movieId;
    
    MovieModel.Delete(id);

    res.redirect("/admin/movies");
}


