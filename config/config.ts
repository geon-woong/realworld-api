import dotenv from 'dotenv';

dotenv.config()

export default {
  development: {
    username: process.env.USER_NAME || '',
    password: process.env.SEQUELIZE_PWD || '',
    database: process.env.DATABASE || '',
    host: process.env.HOST || '',
    dialect: 'mysql' as const,
    logging: false,
  },
  test: {
    username: process.env.USER_NAME || '',
    password: process.env.SEQUELIZE_PWD || '',
    database: process.env.DATABASE || '',
    host: process.env.HOST || '',
    dialect: 'mysql' as const,
    logging: true,
  },
  production: {
    username: process.env.USER_NAME || '',
    password: process.env.SEQUELIZE_PWD || '',
    database: process.env.DATABASE || '',
    host: process.env.HOST || '',
    dialect: 'mysql' as const,
    logging: false,
  },
};
