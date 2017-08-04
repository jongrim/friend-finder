const router = require('express').Router();
const controller = require('../controllers/survey');

router.route('/').get(function(req, res) {
  let promise = controller.getAll();
  promise.then(questions => {
    res.render('survey', { questions });
  });
});

module.exports = router;
