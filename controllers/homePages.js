const router = require('express').Router();
const { User, Blog, Comment } = require('.././models');
// const withAuth =require('../utils/auth');

// GET ALL BLOGS FOR HOMEPAGE
router.get('/', async (req, res) => {
    try {
        const dbBlogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const blogs = dbBlogData.map((blog) =>
            blog.get({ plain: true })
        );
        res.render('homepage', {
            blogs,
            // loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// //GET ONE BLOG
router.get('/blog/:id', async (req, res) => {
    try {
        const dbBlogData = await Blog.findByPk(req.params.id, {
            indlude: [
                {
                    model: Comment,
                    attributes: [
                        'comment',
                        'user_id',

                    ],
                },
            ],
        }),
        const blog = dbBlogData.get({ plain: true });
        res.render('blog', { blog });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


