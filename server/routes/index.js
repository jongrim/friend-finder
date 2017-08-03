const router = require('express').Router();
const friends = require('../api/friends/friendsRoutes.js');
const survey = require('./survey');

router.route('/').get(function(req, res) {
  res.render('index');
});

router.use('/api/friends', friends);
router.use('/survey', survey);

module.exports = router;
