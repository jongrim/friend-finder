const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Friend = new Schema({
  name: {
    type: String,
    required: true
  },
  question_0: {
    type: Number,
    required: true
  },
  question_1: {
    type: Number,
    required: true
  },
  question_2: {
    type: Number,
    required: true
  },
  question_3: {
    type: Number,
    required: true
  },
  question_4: {
    type: Number,
    required: true
  },
  question_5: {
    type: Number,
    required: true
  },
  question_6: {
    type: Number,
    required: true
  },
  question_7: {
    type: Number,
    required: true
  },
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
