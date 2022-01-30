const router = require('express').Router();
const { getModel } = require('../models');

router.get('/', async (req, res) => {
  const { model: aboutData } = await getModel('about');
  res.status(200)
    .json({
      status: 'SUCCESS',
      aboutData
    });
});

module.exports = router;