const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    //find all users
    const userData = await User.findAll({ include: [{ model: Blog }] });
    return res.json(userData);
});

router.post("/", async (req, res) => {
    const userData = await User.create(req.body).catch(err => res.json(err))
    return res.json(userData)
})



module.exports = router;