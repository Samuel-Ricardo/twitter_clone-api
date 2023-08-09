import { MODULES } from '../../app.factory';
import express from 'express';

const Post = MODULES.POST.CONTROLLER.DEFAULT();

const prefix = '/posts';
const router = express.Router();

router.get(prefix, async (req, res, next) => {
  try {
    return res.status(200).json(await Post.listAll());
  } catch (e) {
    return next(e);
  }
});

router.post(prefix, async (req, res, next) => {
  try {
    return res.status(201).json(await Post.create(req.body));
  } catch (e) {
    return next(e);
  }
});

router.get(`${prefix}/:id`, async (req, res, next) => {
  try {
    return res.status(200).json(await Post.details({ id: req.params.id }));
  } catch (e) {
    return next(e);
  }
});

router.patch(prefix, async (req, res, next) => {
  try {
    return res.status(201).json(await Post.update(req.body));
  } catch (e) {
    return next(e);
  }
});

router.delete(`${prefix}/:id`, async (req, res, next) => {
  try {
    return res.status(204).json(await Post.delete({ id: req.params.id }));
  } catch (e) {
    return next(e);
  }
});

export const post = { router, prefix };
