import { CreateLikeSchema } from '@Core/like/DTO/create.dto';
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

export const like = { router, prefix };
