import { Router } from 'express';
import { getModel } from '../models/index.js';

const router = Router();

router.get('/', async (req, res) => {
  const { model: aboutData } = await getModel('about');
  res.status(200)
    .json({
      status: 'SUCCESS',
      aboutData
    });
});

export default router;