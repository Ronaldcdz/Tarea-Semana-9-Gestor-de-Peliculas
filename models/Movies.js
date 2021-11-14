const fs = require("fs");       //importando la clase File System
const path = require("path");   //importando la clase Path para trabajar con directorios

const dataPath = path.join(path.dirname(require.main.filename), "data", "movies.json");

const GetAllMoviesFromFile = (callBack) => {

    fs.readFile(dataPath, (error, data) => {

        if (error) {
            callBack([]);
        }

        else {

            callBack(JSON.parse(data));
        }

    });
}


module.exports = class Movie {

    constructor(id, name, description, imageUrl, gender, active) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.gender = gender;
        this.active = active;
    }


    Save() {

        GetAllMoviesFromFile((movies) => {


            if (this.id) {              //si existe un id entramos a editar

                const editMovieIndex = movies.findIndex((movie) => movie.id === this.id);

                movies[editMovieIndex] = this;

                fs.writeFile(dataPath, JSON.stringify(movies), (error) => { console.log(error) })


            }

            else {                      //si no existe un id estamos agregando

                this.id = Math.random().toString();
                movies.push(this);

                fs.writeFile(dataPath, JSON.stringify(movies), (error) => { console.log(error) })

            }
        })
    }


    static GetAll(callback) {

        GetAllMoviesFromFile(callback);

    }

    static GetById(id, callback) {


        GetAllMoviesFromFile((movies) => {

            const movie = movies.find((mov) => mov.id === id);

            callback(movie);
        });

    }

    static Delete(id) {

        GetAllMoviesFromFile((movies) => {

            const movie = movies.find((movie) => movie.id === id);


            const newMovieList = movies.filter((movie) => movie.id !== id);

            fs.writeFile(dataPath, JSON.stringify(newMovieList), (error) => { console.log(error) })


        });

    }


}