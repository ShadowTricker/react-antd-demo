const router = require('express').Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.status(200).json({ status: 'SUCCESS' });
  } else {
    res.status(200).json({ status: 'ERROR' });
  }
});

module.exports = router;