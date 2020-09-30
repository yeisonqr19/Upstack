const Sequelize = require("sequelize");

const db = new Sequelize("uptasknode", "root", "1047", {
  host: "localhost",
  dialect: "mariadb",
  operatorsAliases: false,
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
