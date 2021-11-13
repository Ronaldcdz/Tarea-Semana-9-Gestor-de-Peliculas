const fs = require("fs");       //importando la clase File System
const path = require("path");   //importando la clase Path para trabajar con directorios




module.exports = class Movie{

    constructor(id, name, description, imageUrl, gender, active) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.gender = gender;
        this.active = active;
    }


    static GetAll() {

        fs.readFile(path.join(path.dirname(require.main.filename), "data", "movies.json"), (error, data) => {

            if (error) {
                return [];
            }

            else {

                return JSON.parse(data);
            }

        });

    }


 }