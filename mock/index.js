import express from 'express';
import routesConfig from './routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routesConfig(app);

app.listen(4440, () => {
  console.log('Mock server running at http://localhost:4440');
});