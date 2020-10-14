const express = require("express");
const routes = require("./routes/index");
const path = require("path");
const bodyParser = require("body-parser");

//Creo la Conexion a la base de datos:
const db = require("./config/db");

//Importo los Helpers:
const helpers = require("./helpers");

//Esto es solo para conectarse a una basede datos existente:
// db.authenticate()
//   .then(() => console.log("Conectado Al servidor"))
//   .catch((error) => console.log(error));

//Para hacer que sequelize cree la tabla de la bd automaticamente hago:
require("./models/Proyectos");
db.sync()
  .then(() => console.log("base de datos creada"))
  .catch((error) => console.log(error));

//Creo una app de express:
const app = express();

//indico donde estan los archivos estaticos, es decir donde esta la carpeta public:
app.use(express.static("public"));

//Voy a habilitar pug como template engine:
app.set("view engine", "pug");

//Luego le indico a express, donde estan mis vistas asi:
app.set("views", path.join(__dirname, "./views"));

//Aqui le paso el vardump a la Aplicacion:
app.use((req, res, next) => {
  const fecha = new Date();
  res.locals.year = fecha.getFullYear();
  res.locals.vardump = helpers.vardump;

  next();
});

//Habilitar body parser para ver los datos del formulario:
app.use(bodyParser.urlencoded({ extended: true }));

//Ruta para el home:
// app.use("/", (req, res) => {
//   res.send("Hello World");
// });

//Voy a utilizar mi archivo de rutas:
app.use("/", routes());

//creo y defino el puerto que utilizara mi app:
app.listen(8200);
