import articlesRouter from './articles.js';
import aboutRouter from './about.js';
import loginRouter from './login.js';

export default function routesConfig(app) {
  app.use('/articles', articlesRouter);
  app.use('/about', aboutRouter);
  app.use('/login', loginRouter);
}