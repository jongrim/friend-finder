const Friend = require('../models/friend/friendModel');

exports.getAll = function(req, res) {
  Friend.find({}).then(friends => {
    res.json(friends);
  });
};

exports.post = function(req, res, next) {
  Friend.create({
    name: req.body.name,
    question_0: req.body.question0answer,
    question_1: req.body.question1answer,
    question_2: req.body.question2answer,
    question_3: req.body.question3answer,
    question_4: req.body.question4answer,
    question_5: req.body.question5answer,
    question_6: req.body.question6answer,
    question_7: req.body.question7answer,
    favoriteEditor: req.body.question8answer,
    favoriteLanguage: req.body.question9answer
  }).then(
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

exports.findSimilar = function(req, res, next) {
  let cFriend = req.body.currentFriend;
  Friend.find({})
    .where('name')
    .ne(cFriend.name)
    .and([
      { question_0: { $gte: cFriend.question_0 - 2 } },
      { question_0: { $lte: cFriend.question_0 + 2 } },
      { question_1: { $gte: cFriend.question_1 - 2 } },
      { question_1: { $lte: cFriend.question_1 + 2 } },
      { question_2: { $gte: cFriend.question_2 - 2 } },
      { question_2: { $lte: cFriend.question_2 + 2 } },
      { question_3: { $gte: cFriend.question_3 - 2 } },
      { question_3: { $lte: cFriend.question_3 + 2 } },
      { question_4: { $gte: cFriend.question_4 - 2 } },
      { question_4: { $lte: cFriend.question_4 + 2 } },
      { question_5: { $gte: cFriend.question_5 - 2 } },
      { question_5: { $lte: cFriend.question_5 + 2 } },
      { question_6: { $gte: cFriend.question_6 - 2 } },
      { question_6: { $lte: cFriend.question_6 + 2 } },
      { question_7: { $gte: cFriend.question_7 - 2 } },
      { question_7: { $lte: cFriend.question_7 + 2 } },
      { favoriteEditor: cFriend.favoriteEditor },
      { favoriteLanguage: cFriend.favoriteLanguage }
    ])
    .then(
      friends => {
        req.body.friendsArray = friends;
        next();
      },
      function(err) {
        console.log(err);
        next(err);
      }
    );
};
