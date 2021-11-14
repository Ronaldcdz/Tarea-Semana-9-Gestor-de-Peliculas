const express = require("express");
const router = express.Router();

const homeController = require("../controllers/HomeController");


router.get("/", homeController.GetHome);

router.get("/movies/:movieId", homeController.GetMovie);

router.post("/movies", homeController.PostFilterByGender)

module.exports = router;