import { CreateFollowSchema } from '@Core/follow/validator/create.validator';
import { MODULES } from '@modules/app.factory';
import { validate } from '@modules/middleware/validator';
import { Router } from 'express';

const prefix = '/follows';
const router = Router();

const module = MODULES.FOLLOW.DEFAULT();

router.post(prefix, validate(CreateFollowSchema), (req, res, next) => {
  try {
    res.status(201).json(module.follow(req.body));
  } catch (error) {
    next(error);
  }
});
