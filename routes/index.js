const express = require("express");
const router = express.Router();
//importo los controladores:
const controller = require("../controllers/proyectosController");
//Importo express validator:
const { body } = require("express-validator/check");

module.exports = () => {
  router.get("/", controller.homeProyectos);
  router.get("/nuevoProyecto", controller.nuevoProyecto);
  router.post(
    "/nuevoProyecto",
    body("nombre").not().isEmpty().trim(),
    controller.agregarProyecto
  );
  router.get("/proyectos/:url", controller.proyectoPorUrl);

  return router;
};
