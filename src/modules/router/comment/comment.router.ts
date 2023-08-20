import { Router } from 'express';
import {
  CreateCommentSchema,
  DeleteCommentSchema,
  GetCommentByPostSchema,
  GetUserCommentsSchema,
  UpdateCommentSchema,
} from '../../@core/comment/validator';
import { MODULES } from '../../app.factory';
import { validate } from '../../middleware/validator';

const prefix = '/comment';
const router = Router();
const module = MODULES.COMMENT.DEFAULT();

router.post(prefix, validate(CreateCommentSchema), async (req, res, next) => {
  try {
    res.status(201).json(await module.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.get(
  `${prefix}/post/:postId`,
  validate(GetCommentByPostSchema),
  async (req, res, next) => {
    try {
      res
        .status(200)
        .json(await module.getPostComments({ postId: req.params.postId }));
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/user/:userId`,
  validate(GetUserCommentsSchema),
  async (req, res, next) => {
    try {
      res
        .status(200)
        .json(await module.getUserComments({ authorId: req.params.userId }));
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  `${prefix}`,
  validate(UpdateCommentSchema),
  async (req, res, next) => {
    try {
      res.status(200).json(await module.udpate(req.body));
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  `${prefix}`,
  validate(DeleteCommentSchema),
  async (req, res, next) => {
    try {
      res.status(204).json(await module.delete(req.body));
    } catch (error) {
      next(error);
    }
  },
);

export const comment = { router, prefix };
