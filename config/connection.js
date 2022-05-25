// init sequelize 
const Sequelize = require('sequelize');

// connection info in here, hidden from repo
require('dotenv').config();


let sequelize;

// create connection both locally and for heroku
if (process.env.JAWSDB_URL) {
  // use JAWSDB for heroku deployment
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // use environment variables
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    //imported from .env file
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
}
//exporting
module.exports = sequelize;