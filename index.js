const app = require('./server/server');
const config = require('./server/config/config');

app.listen(config.port, () => {
  console.log('listening on port ' + config.port);
});
