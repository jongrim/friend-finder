const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const Question = new Schema({
  question: {
    type: String,
    required: true
  },
  answer_1: {
    message: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  answer_2: {
    message: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  answer_3: {
    message: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  answer_4: {
    message: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  answer_5: {
    message: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model('question', Question);
