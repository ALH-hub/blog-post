import express from 'express';
import {
  addPost,
  delPost,
  getPost,
  getPosts,
  updatePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', addPost);
router.delete('/:id', delPost);
router.put('/:id', updatePost);

export default router;
