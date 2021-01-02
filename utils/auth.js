const { lstat } = require("fs");

const withAuth = (req, res, next) => {
    //redirect if not looged in
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;