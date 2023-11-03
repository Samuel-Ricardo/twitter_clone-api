import {
  CreateLikeSchema,
  DeleteLikeSchema,
  GetLikesOfPostSchema,
  GetLikesOfUserSchema,
} from '@Like';
import { MODULES } from '../../app.factory';
import { validate } from '../../middleware/validator';
import { Router } from 'express';

const router = Router();
const prefix = '/likes';
const Like = MODULES.LIKE.DEFAULT();

router.post(prefix, validate(CreateLikeSchema), async (req, res, next) => {
  try {
    res.status(201).json(await Like.save(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete(
  `${prefix}/:id`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(DeleteLikeSchema),
  async (req, res, next) => {
    try {
      res.status(204).json(await Like.dislike({ id: req.params.id }));
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/post/:likedId`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(GetLikesOfPostSchema),
  async (req, res, next) => {
    try {
      res
        .status(200)
        .json(await Like.getPostLikes({ likedId: req.params.likedId }));
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/user/:userId`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(GetLikesOfUserSchema),
  async (req, res, next) => {
    try {
      res
        .status(200)
        .json(await Like.getUserLikes({ userId: req.params.userId }));
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/comment/:likedId`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  async (req, res, next) => {
    try {
      res
        .status(200)
        .json(await Like.getCommentLikes({ likedId: req.params.likedId }));
    } catch (error) {
      next(error);
    }
  },
);

export const like = { router, prefix };
