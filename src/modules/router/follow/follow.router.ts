import { CountFollowersSchema } from '@Core/follow/validator/count_followers.validator';
import { CountFollowingsSchema } from '@Core/follow/validator/count_followings.validator';
import { CreateFollowSchema } from '@Core/follow/validator/create.validator';
import { DeleteFollowSchema } from '@Core/follow/validator/delete.validator';
import { MODULES } from '@modules/app.factory';
import { validate } from '@modules/middleware/validator';
import { Router } from 'express';

const prefix = '/follow';
const router = Router();

const module = MODULES.FOLLOW.DEFAULT();

router.post(prefix, validate(CreateFollowSchema), (req, res, next) => {
  try {
    res.status(201).json(module.follow(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete(prefix, validate(DeleteFollowSchema), (req, res, next) => {
  try {
    res.status(204).json(module.unfollow(req.body));
  } catch (error) {
    next(error);
  }
});

router.get(
  `${prefix}/count/followers/:followingId`,
  validate(CountFollowersSchema),
  (req, res, next) => {
    try {
      res
        .status(200)
        .json(module.countFollowers({ followingId: req.params.followingId }));
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/count/following/:followerId`,
  validate(CountFollowingsSchema),
  (req, res, next) => {
    try {
      res
        .status(200)
        .json(module.countFollowing({ followerId: req.params.followerId }));
    } catch (error) {
      next(error);
    }
  },
);

router.get(`${prefix}/me/:followingId`, (req, res, next) => {
  try {
    res
      .status(200)
      .json(module.getFollowers({ followingId: req.params.followingId }));
  } catch (error) {
    next(error);
  }
});

router.get(`${prefix}/:followerId`, (req, res, next) => {
  try {
    res
      .status(200)
      .json(module.getFollowings({ followerId: req.params.followerId }));
  } catch (error) {
    next(error);
  }
});
