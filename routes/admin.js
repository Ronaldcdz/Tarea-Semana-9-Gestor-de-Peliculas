const express = require("express");
const router = express.Router();

const adminController = require("../controllers/AdminController");

// el proposito de las rutas es que cuando llegue una peticion lo redireccione al action de un controller

router.get("/add-movies", adminController.GetAddMovie);

router.post("/add-movies", adminController.PostAddMovie);

module.exports = router;