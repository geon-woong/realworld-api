import Sequelize from 'sequelize';
import User from './user';
import Article from './article';
import configObj from '../config/config';

const env = process.env.NODE_ENV as 'production' | 'test' || 'development';
const config  = configObj[env];

export const sequelize = new Sequelize.Sequelize(
    config.database, config.username, config.password, config,
  );

User.initiate(sequelize);
Article.initiate(sequelize);

User.associate();
Article.associate();
