const express = require("express");
const router = express.Router();

const adminController = require("../controllers/AdminController");

// el proposito de las rutas es que cuando llegue una peticion lo redireccione al action de un controller

router.get("/movies", adminController.GetIndex);        //DEVUELVE LA RUTA DE LA PAGINA PRINCIPAL DEL ADMIN CON TODAS LAS PELICULAS

router.get("/add-movies", adminController.GetAddMovie); //DEVUELVE LA RUTA DE LA PAGINA PARA AGREGAR PELICULAS
router.post("/add-movies", adminController.PostAddMovie);


router.get("/edit-movies/:movieId", adminController.GetEditMovie);
router.post("/edit-movies", adminController.PostEditMovie);


router.post("/delete-movies", adminController.PostDeleteMovie);


module.exports = router;