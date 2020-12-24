const { Model, DataTypes, Sequelize } = require('sequelize');
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
        comment: {
            type: DataTypes.STRING(400),
            allowNull: true,
            validate: {
                len: [10, 400],
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