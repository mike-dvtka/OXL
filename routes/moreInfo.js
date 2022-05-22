var express = require('express');
var router = express.Router();
var adModel = require('../adModel');

router.get('/:id', checkNotAuthenticated, (req, res) => {
	adModel.findOne({ _id: req.params.id }, function (err, items) {
		if (err) {
			console.log(err);
			res.status(500).send('An error occurred', err);
		} else {
			res.render('moreInfo', { data: items });
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
