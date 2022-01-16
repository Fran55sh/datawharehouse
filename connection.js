require('dotenv').config();
const Sequelize = require('sequelize');
const config = require('./config')


const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mariadb",
    define: {
      freezeTableName: true,
    },
  }
);

connection
  .authenticate()
  .then((res) => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(err);
  });


module.exports = connection;