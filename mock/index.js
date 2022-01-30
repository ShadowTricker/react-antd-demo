const express = require('express');
const app = express();
const routesConfig = require('./routes/index');

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method === "OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
  else  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routesConfig(app);

app.listen(4440, () => {
  console.log('Mock server running at http://localhost:4440');
});