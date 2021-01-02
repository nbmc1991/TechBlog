const { Model, DataTypes } = require('sequelize');
//bring in database connection from config
const sequelize = require('../config/connection');

class Blog extends Model { }

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: {
                    message: 'Please enter a title for your blog',
                },
            },
        },
        content: {
            type: DataTypes.STRING(300),
            allowNull: false,
            validate: {
                len: [10, 300],
                notNull: {
                    message: 'Blog must be at least 10 characters.',
                },
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
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
        modelName: 'blog',
    }
);

module.exports = Blog;
