const Sequelize = require("sequelize");
const slug = require("slug");
const db = require("../config/db");
const shortid = require("shortid");

//Voy a crear un modelo asi:
const Proyectos = db.define(
  "proyectos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
      type: Sequelize.STRING,
    },

    url: {
      type: Sequelize.STRING,
    },
  },
  {
    hooks: {
      beforeCreate(proyecto) {
        const url = slug(proyecto.nombre).toLowerCase().trim();
        //Luego lo agrego como proyecto principal la url, asi:
        proyecto.url = `${url}-${shortid.generate()}`;
      },
    },
  }
);

module.exports = Proyectos;
