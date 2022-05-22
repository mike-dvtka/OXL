var mongoose = require('mongoose');

var adSchema = new mongoose.Schema({
	carBrand: String,
	carModel: String,
	carPrice: Number,
	carYear: Number,
	carMileage: Number,
	carPicture: {
		data: Buffer,
		contentType: String,
	},
	carDescription: String,
});

module.exports = new mongoose.model('adModel', adSchema);
