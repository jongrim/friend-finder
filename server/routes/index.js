const router = require('express').Router();
const friend = require('./friend');
const question = require('../api/question/questionRoutes');
const survey = require('./survey');

router.route('/').get(function(req, res) {
  res.render('index');
});

router.use('/api/question', question);
router.use('/friends', friend);
router.use('/survey', survey);

module.exports = router;
