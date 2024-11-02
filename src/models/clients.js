import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 

const Clients = sequelize.define('clients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    linkedin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Clients;
