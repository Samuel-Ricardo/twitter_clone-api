import { CreateLikeSchema } from '@Core/like/DTO/create.dto';
import { DeleteLikeSchema } from '@Core/like/DTO/delete.dto';
import { GetLikesOfPostSchema } from '@Core/like/DTO/get_by_post.dto';
import { GetLikesOfUserSchema } from '@Core/like/DTO/get_by_user.dto';
import { MODULES } from '@modules/app.factory';
import { validate } from '@modules/middleware/validator';
import { Router } from 'express';

const router = Router();
const prefix = '/like';
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
  `${prefix}/:likedId`,
  validate(GetLikesOfPostSchema),
  async (req, res, next) => {
    try {
      res.status(200).json(Like.getPostLikes({ likedId: req.params.likedId }));
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/:userId`,
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

router.get(`${prefix}/:likedId`, async (req, res, next) => {
  try {
    res
      .status(200)
      .json(await Like.getCommentLikes({ likedId: req.params.likedId }));
  } catch (error) {
    next(error);
  }
});

export const like = { router, prefix };
