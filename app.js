const express = require("express");
const path = require("path");

const app = express();
const expressHbs = require("express-handlebars");

//importando rutas
const homeRoute = require("./routes/home");
const adminRoute = require("./routes/admin");


app.engine("hbs", expressHbs({
    layoutsDir: "views/layout",
    defaultLayout: "main-layout",
    extname: "hbs"
}));

app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

//usando las rutas para los middleware
app.use(homeRoute);
app.use("/admin", adminRoute);

//importando el controlador de error
const errorController = require("./controllers/ErrorController");
app.use("/", errorController.Get404);

app.listen(8080);