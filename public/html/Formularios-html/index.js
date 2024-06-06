const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all("/", (req, res) => {
    let respuesta = {};

    respuesta.body = req.body;
    respuesta.params = req.params;
    respuesta.query = req.query;
    respuesta.headers = req.headers;
    respuesta.ip = req.ip;

    console.log({respuesta});

});

app.listen(3000, () =>{
    console.log("App corriendo en el puerto 3000")
})