const express = require('express');
const app = express();
const middleware = require('./middleware/appMiddleware');
const routes = require('./routes/');

middleware(app);
app.use('/', routes);

module.exports = app;
