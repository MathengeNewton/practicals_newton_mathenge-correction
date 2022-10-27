const {Sequelize} = require("sequelize");
const dotenv = require("dotenv");
const pg = require("pg");
dotenv.config();


const sequelize = new Sequelize(process.env.DB_STRING, {
    dialect: pg
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Students = require("./students")(sequelize, Sequelize);
db.ClassStreams = require("./streams")(sequelize, Sequelize);

module.exports = db;