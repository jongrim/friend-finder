const friendModel = require('../models/friend/friendModel');

exports.getAll = function(req, res) {
  friendModel.find({}).then(friends => {
    res.json(friends);
  });
};

exports.post = function(req, res, next) {
  let friendName = req.body.name;
  let answers = [
    req.body.question0answer,
    req.body.question1answer,
    req.body.question2answer,
    req.body.question3answer,
    req.body.question4answer,
    req.body.question5answer,
    req.body.question6answer,
    req.body.question7answer
  ];
  let favoriteEditor = req.body.question8answer;
  let favoriteLanguage = req.body.question9answer;

  // req.body.currentFriend = {
  //   name: friendName,
  //   scaledAnswers: answers,
  //   favoriteEditor: favoriteEditor,
  //   favoriteLanguage: favoriteLanguage
  // };

  friendModel
    .create({
      name: friendName,
      scaledAnswers: answers,
      favoriteEditor: favoriteEditor,
      favoriteLanguage: favoriteLanguage
    })
    .then(
      function(friend) {
        req.body.currentFriend = friend;
        next();
      },
      function(err) {
        console.log(err);
        next(err);
      }
    );
};

exports.getAllAddToBody = function(req, res, next) {
  friendModel.find({}).then(friends => {
    req.body.friendsArray = friends;
    next();
  }, function(err) {
    console.log(err);
    next(err);
  });
};
