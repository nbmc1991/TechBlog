const { Comment } = require('../models');

const commentData = [
    {
        comment: 'a piece of text placed within a program to help other users to understand it, which the computer ignores when running the program.',
    },
    {
        comment: 'express (an opinion or reaction).',
    },
    {
        comment: 'test',
    },
];
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;