const router = require('express').Router();
const controller = require('./questionController');

router.route('/').get(controller.getAll).post(controller.post);

module.exports = router;
