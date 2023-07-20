import { Sequelize } from "sequelize";


const sequelize = new Sequelize('publications_db', 'root', 'circo12', {
    host: 'localhost',
    dialect: 'mysql',   
    port: 3306
});

export default sequelize;