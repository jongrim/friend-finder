const _ = require('lodash');

const config = {
  dev: 'development',
  test: 'test',
  port: process.env.NODE_ENV || 3000
};

process.env.NODE_ENV = process.env.NODE_END || config.dev;
config.env = process.env.NODE_ENV;

let envconfig;

try {
  envconfig = require('./' + config.env);
  envconfig = envconfig || {};
} catch (e) {
  envconfig = {};
}

module.exports = _.merge(config, envconfig);
