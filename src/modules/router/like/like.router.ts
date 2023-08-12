import { CreateLikeSchema } from '@Core/like/DTO/create.dto';
import { DeleteLikeSchema } from '@Core/like/DTO/delete.dto';
import { GetLikesOfPostSchema } from '@Core/like/DTO/get_by_post.dto';
import { MODULES } from '@modules/app.factory';
import { validate } from '@modules/middleware/validator';
import { Router } from 'express';

const router = Router();
const prefix = '/like';
const Like = MODULES.LIKE.DEFAULT();

router.post(prefix, validate(CreateLikeSchema), (req, res, next) => {
  try {
    res.status(201).json(Like.save(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete(`${prefix}/:id`, validate(DeleteLikeSchema), (req, res, next) => {
  try {
    res.status(204).json(Like.dislike({ id: req.params.id }));
  } catch (error) {
    next(error);
  }
});

router.get(
  `${prefix}/:likedId`,
  validate(GetLikesOfPostSchema),
  (req, res, next) => {
    try {
      res.status(200).json(Like.getPostLikes({ likedId: req.params.likedId }));
    } catch (error) {
      next(error);
    }
  },
);

export const like = { router, prefix };
