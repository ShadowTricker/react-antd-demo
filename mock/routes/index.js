

function routesConfig(app) {
  app.use('/articles', require('./articles'));
  app.use('/about', require('./about'));
}

module.exports = routesConfig;