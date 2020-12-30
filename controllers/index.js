const router = require('express').Router();
const apiRoutes = require('./api');

// const homePages = require('./homePages');

// router.use('/', homePages);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>Change PATH!</h1>")
});

module.exports = router;
