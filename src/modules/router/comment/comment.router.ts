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

const prefix = '/comments';
const router = Router();
const comment_module = MODULES.COMMENT.DEFAULT();

router.post(prefix, validate(CreateCommentSchema), async (req, res, next) => {
  try {
    res.status(201).json(await comment_module.create(req.body));
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
        .json(
          await comment_module.getPostComments({ postId: req.params.postId }),
        );
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/author/:userId`,
  validate(GetUserCommentsSchema),
  async (req, res, next) => {
    try {
      res
        .status(200)
        .json(
          await comment_module.getUserComments({ authorId: req.params.userId }),
        );
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
      res.status(200).json(await comment_module.udpate(req.body));
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
      res.status(204).json(await comment_module.delete(req.body));
    } catch (error) {
      next(error);
    }
  },
);

export const comment = { router, prefix };
