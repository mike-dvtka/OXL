var express = require('express');
var router = express.Router();
var adModel = require('../adModel');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads');
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

var upload = multer({ storage: storage });

router.post('/', upload.single('carPicture'), (req, res) => {
	var data = {
		carBrand: req.body.carBrand.toLowerCase(),
		carModel: req.body.carModel.toLowerCase(),
		carPrice: req.body.carPrice,
		carYear: req.body.carYear,
		carMileage: req.body.carMileage,
		carPicture: {
			data: fs.readFileSync(
				path.join(__dirname + '/../uploads/' + req.file.filename)
			),
			contentType: 'image/png',
		},
		carDescription: req.body.carDescription,
	};

	adModel.create(data, (err, item) => {
		if (err) {
			console.log(err);
			res.render('addAd', { msg: 'Błąd dodawania ogłoszenia' });
		} else {
			item.save();
			res.render('addAd', { msg: 'Dodano ogłoszenie' });
		}
	});
});

module.exports = router;
