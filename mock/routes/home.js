import { Router } from 'express';
import { getModel } from '../models/index.js';

const router = Router();

router.get('/', async (req, res) => {
  const { model: articles } = await getModel('articles');
  res.status(200)
    .json({
      status: 'SUCCESS',
      articles: articles.slice(0, 4)
    });
});

export default router;