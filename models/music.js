const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const musicSchema = new Schema({
	albumCover: {type: String},
	title: { type: String, required: true },
	file: {type: String, required: true},
	artist: { type: String, required: true },
	tags: {type: String},
	description: {type: String},
	date: { type: Date, default: Date.now }
});
const Music = mongoose.model("Music", musicSchema);

module.exports = Music;