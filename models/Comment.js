const { Model, DataTypes } = require('sequelize');
//bring in database connection from config
const sequelize = require('../config/connection');

//comment class might be needed,
//figure out how to link comment to user uuid>>???
class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "blog",
                key: "id"
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);
module.exports = Comment;