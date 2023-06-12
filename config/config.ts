import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    username: 'geonwoong',
    password: process.env.DB_PASSWORD,
    database: 'realworld-api',
    host: '127.0.0.1',
    dialect: 'mysql' as const,
    logging: true,
  },
  test: {
    username: "geonwoong",
    password: process.env.DB_PASSWORD,
    database: 'realworld-api',
    host: "127.0.0.1",
    dialect: "mysql" as const
  },
  production: {
    username: 'geonwoong',
    password: process.env.DB_PASSWORD,
    database: 'realworld-api',
    host: '127.0.0.1',
    dialect: 'mysql' as const,
    logging: false,
  },
};
