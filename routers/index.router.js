require('dotenv').config();

var authSyncRouter = require('./auth-sync.router');
var apiRouter = require('./api.router');

var errorHandler = require('../helpers/http-error-handler');

const route = (app) => {

  app.use('/auth-sync', authSyncRouter);
  app.use('/api', apiRouter);

  // global error handler
  app.use(errorHandler);
}

module.exports = route;