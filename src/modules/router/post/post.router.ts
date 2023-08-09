import { MODULES } from '@modules/app.factory';
import express from 'express';

const Post = MODULES.POST.CONTROLLER.DEFAULT();

const prefix = '/post';
const router = express.Router();

router.get(prefix, async (req, res, next) => {
  try {
    return await Post.listAll();
  } catch (e) {
    return next(e);
  }
});

export const post = { router, prefix };
