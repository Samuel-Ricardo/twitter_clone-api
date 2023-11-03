import {
  CreatePostSchema,
  DeletePostSchema,
  FindPostByAuthorIdSchema,
  FindPostByIdSchema,
  UpdatePostSchema,
} from '@Post';
import { MODULES } from '../../app.factory';
import express from 'express';
import { validate } from '../../middleware/validator/validator.middleware';

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

router.post(prefix, validate(CreatePostSchema), async (req, res, next) => {
  try {
    return res.status(201).json(await Post.create(req.body));
  } catch (e) {
    return next(e);
  }
});

router.get(
  `${prefix}/:id`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(FindPostByIdSchema),
  async (req, res, next) => {
    try {
      return res.status(200).json(await Post.details({ id: req.params.id }));
    } catch (e) {
      return next(e);
    }
  },
);

router.patch(prefix, validate(UpdatePostSchema), async (req, res, next) => {
  try {
    return res.status(201).json(await Post.update(req.body));
  } catch (e) {
    return next(e);
  }
});

router.delete(
  `${prefix}/:id`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(DeletePostSchema),
  async (req, res, next) => {
    try {
      return res.status(204).json(await Post.delete({ id: req.params.id }));
    } catch (e) {
      return next(e);
    }
  },
);

router.get(
  `${prefix}/author/:id`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(FindPostByAuthorIdSchema),
  async (req, res, next) => {
    try {
      return res
        .status(200)
        .json(await Post.listUserPosts({ id: req.params.id }));
    } catch (e) {
      return next(e);
    }
  },
);

export const post = { router, prefix };
