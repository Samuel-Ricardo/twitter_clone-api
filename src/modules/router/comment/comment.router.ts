import { Router } from 'express';
import { CreateCommentSchema } from '../../@core/comment/validator';
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

router.get(`${prefix}/post/:postId`, async (req, res, next) => {
  try {
    res
      .status(200)
      .json(await module.getPostComments({ postId: req.params.postId }));
  } catch (error) {
    next(error);
  }
});
