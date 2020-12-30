const { Blog } = require('../models');

const blogData = [
    {
        title: 'Easy Like Sunday Morning',
        content: 'Today was A very productive day.'
    },
    {
        title: 'The need for Developers',
        content: 'I woldnt say everyones'
    },
    {
        title: 'Yarn is a package manager.',
        content: 'test comment'
    },
];

const seedBlog = () => Blog.bulkCreate(blogData);
module.exports = seedBlog;