const friendModel = require('./friendModel');

exports.getAll = function(req, res) {
  friendModel.find({}).then(friends => {
    res.json(friends);
  });
};

exports.post = function(req, res, next) {
  let friendName = req.body.name;
  let answers = [
    req.body.question1answer,
    req.body.question2answer,
    req.body.question3answer,
    req.body.question4answer,
    req.body.question5answer,
    req.body.question6answer,
    req.body.question7answer,
    req.body.question8answer
  ];
  let favoriteEditor = req.body.question9answer;
  let favoriteLanguage = req.body.question10answer;

  friendModel
    .create({
      name: friendName,
      scaledAnswers: answers,
      favoriteEditor: favoriteEditor,
      favoriteLanguage: favoriteLanguage
    })
    .then(
      function(friend) {
        res.json(friend);
      },
      function(err) {
        console.log(err);
        next(err);
      }
    );
};
