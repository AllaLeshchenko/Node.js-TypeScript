import { DataTypes } from "sequelize";
import sequelize from './config/db.js';

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primeryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
     content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
     userId: {                   // Это вторичный ключ (внешний), связывающий Post c User
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {            // Здесь прописано на что будет ссылатся ключ
            model: 'Users',
            key: 'id'
        }
    },
}, {
    tableName: 'Posts',
    timestamps: false,
});

export default Post;