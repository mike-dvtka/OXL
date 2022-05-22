var express = require('express');
var router = express.Router();
var adModel = require('../adModel');

router.get('/', (req, res) => {
	adModel.findByIdAndDelete(req.query.id, function (err) {
		if (err) {
			console.log(err);
			res.status(500).send('An error occurred', err);
		} else {
			adModel.find({}, (err, items) => {
				if (err) {
					console.log(err);
					res.status(500).send('An error occurred', err);
				} else {
					res.render('admin', { data: items, msg: 'Usunięto ogłoszenie' });
				}
			});
		}
	});
});

module.exports = router;
