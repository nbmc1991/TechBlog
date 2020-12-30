const router = require('express').Router();

const { Blog, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    const blogInfo = await Blog.findAll({
        include: [{ model: User }, { model: Comment }],
    });
    return res.json(blogInfo);
});


module.exports = router;