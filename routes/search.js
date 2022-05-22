var express = require('express');
var router = express.Router();
var adModel = require('../adModel');

router.get('/', (req, res) => {
	adModel.find(
		{
			$or: [
				{ carBrand: req.query.searchBar.toLowerCase() },
				{ carModel: req.query.searchBar.toLowerCase() },
			],
		},
		(err, items) => {
			if (err) {
				console.log(err);
				res.status(500).send('An error occurred', err);
			} else {
				res.render('index', { data: items });
			}
		}
	);
});

module.exports = router;
