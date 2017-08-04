const questionModel = require('./questionModel');

exports.getAll = function(req, res) {
  questionModel.find({}).then(questions => {
    res.json(questions);
  });
};

exports.post = function(req, res, next) {
  let questionText = req.body.question;
  let answer1 = {};
  answer1.message = req.body.answer1Text;
  answer1.value = req.body.answer1Value;
  let answer2 = {};
  answer2.message = req.body.answer2Text;
  answer2.value = req.body.answer2Value;
  let answer3 = {};
  answer3.message = req.body.answer3Text;
  answer3.value = req.body.answer3Value;
  let answer4 = {};
  answer4.message = req.body.answer4Text;
  answer4.value = req.body.answer4Value;
  let answer5 = {};
  answer5.message = req.body.answer5Text;
  answer5.value = req.body.answer5Value;

  questionModel
    .create({
      question: questionText,
      answer_1: answer1,
      answer_2: answer2,
      answer_3: answer3,
      answer_4: answer4,
      answer_5: answer5
    })
    .then(
      function(question) {
        res.json(question);
      },
      function(err) {
        console.log(err);
        next();
      }
    );
};
