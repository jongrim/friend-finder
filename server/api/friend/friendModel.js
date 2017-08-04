const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Friend = new Schema({
  name: {
    type: String,
    required: true
  },
  scaledAnswers: [{ type: Number, required: true }],
  favoriteEditor: {
    type: String,
    required: true
  },
  favoriteLanguage: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('friend', Friend);
