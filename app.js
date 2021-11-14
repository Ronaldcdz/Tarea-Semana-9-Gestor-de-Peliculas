const express = require("express");
const path = require("path");

const app = express();
const expressHbs = require("express-handlebars");

//importando rutas
const homeRoute = require("./routes/home");
const adminRoute = require("./routes/admin");


const addMovieHelper = require("./helpers/hbs/addMovieHelper");

app.engine("hbs", expressHbs({
    layoutsDir: "views/layout",
    defaultLayout: "main-layout",
    extname: "hbs",
    helpers: {
        isSelectedAccion: addMovieHelper.isSelectedAccion,
        isSelectedTerror: addMovieHelper.isSelectedTerror,
        isSelectedComedia: addMovieHelper.isSelectedComedia,
        isSelectedSuspenso: addMovieHelper.isSelectedSuspenso,
        isSelectedDocumentales: addMovieHelper.isSelectedDocumentales,

    }
}));

app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, "public")));

//usando las rutas para los middleware
app.use("/admin", adminRoute);
app.use(homeRoute);


//importando el controlador de error
const errorController = require("./controllers/ErrorController");
app.use("/", errorController.Get404);

app.listen(8080);