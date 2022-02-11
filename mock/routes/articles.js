import { Router } from 'express';
import {
  getModel,
  getArticle,
  addArticle,
  updateArticle,
  deleteArticle
} from '../models/index.js';

const router = Router();

router.get('/', async (req, res) => {
  const { model: articles } = await getModel('articles');
  res.status(200)
    .json({
      status: 'SUCCESS',
      articles
    });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const article = await getArticle(id);
  res.status(200).json({
    status: 'SUCCESS',
    article
  });
});

router.post('/', async (req, res) => {
  const articleNeedAdd = req.body;
  await addArticle(articleNeedAdd);
  res.status(200).json({
    status: 'SUCCESS',
    // articles
  })
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const articleNeedUpdate = req.body;
  console.log(articleNeedUpdate);
  await updateArticle(id, articleNeedUpdate);
  res.status(200).json({
    status: 'SUCCESS',
    // articles
  })
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await deleteArticle(id);
  res.status(200).json({
    status: 'SUCCESS',
    // articles
  })
});

export default router;