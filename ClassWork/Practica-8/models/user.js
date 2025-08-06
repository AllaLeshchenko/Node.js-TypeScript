import { DataTypes } from "sequelize";
import sequelize from './config/db.js';

const User = sequelize.define('User', {
     id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primeryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
     email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
     createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'Users',
    timestamps: false,
});

export default User;