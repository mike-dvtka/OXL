var express = require('express');
var router = express.Router();
var adModel = require('../adModel');

router.get('/', checkAuthenticated, (req, res) => {
	adModel.find({}, (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send('An error occurred', err);
		} else {
			res.render('admin', { data: items, msg: null });
		}
	});
});

function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}

module.exports = router;
