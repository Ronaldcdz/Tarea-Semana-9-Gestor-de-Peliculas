
exports.GetHome = (req, res, next) => {

    res.status(200).render("movies/home", {pageTitle: "Gestor de Pelicula"});
}