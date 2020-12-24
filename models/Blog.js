const { Model, DataTypes, Sequelize } = require('sequelize');
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
        blog_title: {
            type: DataTypes.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: {
                    message: 'Please enter a title for your blog',
                },
            },
        },
        blog_body: {
            type: DataTypes.STRING(300),
            allowNull: false,
            validate: {
                len: [10, 300],
                notNull: {
                    message: 'Blog must be at least 10 characters.',
                },
            },
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "blog",
    }
);

module.exports = Blog;
