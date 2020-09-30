const modeloProyectos = require("../models/Proyectos");
const slug = require("slug");

exports.homeProyectos = async (req, res) => {
  //Para Mostrar todos los proyectos de la BD:
  const proyectos = await modeloProyectos.findAll();

  res.render("index", {
    nombrePagina: "Proyectos",
    proyectos,
  });
};

exports.nuevoProyecto = (req, res) => {
  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo Proyecto",
  });
};

exports.agregarProyecto = async (req, res) => {
  //ver en la consola lo que escribe el usuario
  // console.log(req.body);

  //Voy a validar si el input tiene algun valor:
  const { nombre } = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({ texto: "Agrega un nombre al Proyecto" });
  }

  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo Proyecto",
      errores: errores,
    });
  } else {
    //Aqui como no hay errores, inserto en la BD:
    // modeloProyectos
    //   .create({ nombre })
    //   .then(() => console.log("Guardado Correctamente"))
    //   .catch((error) => console.log(error));
    //--------------------------------------------------
    //PARA HACERLO CON ASYNC/AWAIT:
    const proyecto = await modeloProyectos.create({ nombre });
    res.redirect("/");
  }
};

exports.proyectoPorUrl = async (req, res) => {
 
  
  
};
