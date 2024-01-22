import sequelize from "../db";
import {DataTypes} from "sequelize";

export const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, notNull: true}
})