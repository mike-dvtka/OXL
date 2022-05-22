var express = require('express');
var router = express.Router();

router.get('/', checkNotAuthenticated, (req, res) => {
	res.render('addAd', { msg: null });
});

function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/admin');
	}
	next();
}

module.exports = router;
