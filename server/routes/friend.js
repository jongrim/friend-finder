const router = require('express').Router();
const controller = require('../controllers/friendController');

router
  .route('/')
  .get(function(req, res) {
    res.send('ok');
  })
  .post([controller.post, controller.findSimilar], function(req, res) {
    console.log(req.body);
    let currentFriend = req.body.currentFriend;
    let friendsArray = req.body.friendsArray;
    res.render('friends', { data: req.body });
  });

module.exports = router;
