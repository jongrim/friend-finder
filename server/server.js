const express = require('express');
const app = express();
const middleware = require('./middleware/appMiddleware');
const routes = require('./routes/');
const config = require('./config/config');
const mongoose = require('mongoose');

mongoose.connect(config.db.url, {
  useMongoClient: true
});

middleware(app);
app.use('/', routes);

module.exports = app;
