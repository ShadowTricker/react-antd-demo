const router = require('express').Router();
const {
  getModel
} = require('../models');

router.get('/', async (req, res) => {
  const { model: articles } = await getModel('articles');
  res.status(200)
    .json({
      status: 'SUCCESS',
      articles: articles.slice(0, 4)
    });
});

module.exports = router;