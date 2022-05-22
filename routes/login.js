var express = require('express');
const passport = require('passport');
var router = express.Router();

router.post(
	'/',
	checkNotAuthenticated,
	passport.authenticate('local', {
		successRedirect: '/admin',
		failureRedirect: '/',
		failureFlash: true,
	})
);

function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/admin');
	}
	next();
}

module.exports = router;
