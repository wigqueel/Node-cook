const mongoose = require('mongoose');

const Recipe = new mongoose.Schema({
	title: String,
	category: String,
	createDate : String,
	shortDesc: String,
	longDesc: String,
	id: String
}, {
	versionKey: false,
	collection: 'Recipe',
});

module.exports = mongoose.model('Recipe', Recipe);
