import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Publication = sequelize.define('publication', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE
    }
})