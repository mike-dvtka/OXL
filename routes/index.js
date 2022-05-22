var express = require('express');
var router = express.Router();
var adModel = require('../adModel');

router.get('/', checkNotAuthenticated, (req, res) => {
	adModel.find({}, (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send('An error occurred', err);
		} else {
			res.render('index', { data: items });
		}
	});
});

function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/admin');
	}
	next();
}

module.exports = router;
