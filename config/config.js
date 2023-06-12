require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER_NAME,
    password: process.env.SEQUELIZE_PWD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: 'mysql',
    logging: true,
  },
  test: {
    username: process.env.USER_NAME,
    password: process.env.SEQUELIZE_PWD,
    database: process.env.DATABASE,
    host: "127.0.0.1",
    dialect: "mysql",
    logging: true,
  },
  production: {
    username: process.env.USER_NAME,
    password: process.env.SEQUELIZE_PWD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: 'mysql',
    logging: false,
  },
};