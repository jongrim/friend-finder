const router = require('express').Router();
const friend = require('../api/friend/friendRoutes');
const question = require('../api/question/questionRoutes');
const survey = require('./survey');

router.route('/').get(function(req, res) {
  res.render('index');
});

router.use('/api/friend', friend);
router.use('/api/question', question);
router.use('/survey', survey);

module.exports = router;
