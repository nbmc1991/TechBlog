const sequelize = require('../config/connection');
const seedBlog = require('./blogData');
const seedComment = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ foce: true });

    await seedComment();

    await seedBlog();

    process.exit(0);
};

seedAll();