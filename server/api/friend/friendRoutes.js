const router = require('express').Router();

router.route('/').get(function(req, res) {
  res.send('ok');
});

module.exports = router;
