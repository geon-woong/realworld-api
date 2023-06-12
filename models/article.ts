import Sequelize, {
    Model, CreationOptional, InferAttributes, InferCreationAttributes,
} from "sequelize";

class Article extends Model<InferAttributes<Article>, InferCreationAttributes<Article>> {
    declare id: CreationOptional<number>
    declare content: string;
    declare img: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    static initiate(sequelize: Sequelize.Sequelize) {
        Article.init({
            id:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            content:{
                type: Sequelize.STRING(140),
                allowNull: false,
            },
            img:{
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        },{
            sequelize,
            timestamps: true,
            modelName: 'Article',
            tableName: 'articles',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
     }

     static associate() {

     };

}

export default Article;