require('dotenv').config();

var authSyncRouter = require('./auth-sync.router');

var systemApiRouter = require('./api/system.router');
var synthsApiRouter = require('./api/synths.router');
var exchangeApiRouter = require('./api/exchange.router');
var futuresApiRouter = require('./api/futures.router');
var statsApiRouter = require('./api/stats.router');
var pricesApiRouter = require('./api/prices.router');

var errorHandler = require('../helpers/http-error-handler');

const route = (app) => {

  app.use('/auth-sync', authSyncRouter);

  app.use('/api/system', systemApiRouter);
  app.use('/api/synths', synthsApiRouter);
  app.use('/api/exchange', exchangeApiRouter);
  app.use('/api/futures', futuresApiRouter);
  app.use('/api/stats', statsApiRouter);
  app.use('/api/prices', pricesApiRouter);

  // global error handler
  app.use(errorHandler);
}

module.exports = route;