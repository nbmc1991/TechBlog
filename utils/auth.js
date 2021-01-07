const withAuth = (req, res, next) => {
    //redirect if not looged in
    if (!req.session.logged_in) {
        res.status(401).json({ success: false })
    } else {
        next();
    }
};

module.exports = withAuth;