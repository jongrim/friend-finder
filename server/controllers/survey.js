const questionModel = require('../api/question/questionModel');

exports.getAll = function() {
  return questionModel.find({});
};
