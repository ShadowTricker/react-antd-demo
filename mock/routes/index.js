

function routesConfig(app) {
  app.use('/articles', require('./articles'));
  app.use('/about', require('./about'));
  app.use('/login', require('./login'));
}

module.exports = routesConfig;