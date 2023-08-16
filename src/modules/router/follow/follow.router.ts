import { CountFollowersSchema } from '../../@core/follow/validator/count_followers.validator';
import { CountFollowingsSchema } from '../../@core/follow/validator/count_followings.validator';
import { CreateFollowSchema } from '../../@core/follow/validator/create.validator';
import { DeleteFollowSchema } from '../../@core/follow/validator/delete.validator';
import { MODULES } from '../../app.factory';
import { validate } from '../../middleware/validator';
import { Router } from 'express';

const prefix = '/follow';
const router = Router();

const followModule = MODULES.FOLLOW.DEFAULT();

router.post(prefix, validate(CreateFollowSchema), (req, res, next) => {
  try {
    res.status(201).json(followModule.follow(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete(prefix, validate(DeleteFollowSchema), (req, res, next) => {
  try {
    res.status(204).json(followModule.unfollow(req.body));
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
        .json(
          followModule.countFollowers({ followingId: req.params.followingId }),
        );
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
        .json(
          followModule.countFollowing({ followerId: req.params.followerId }),
        );
    } catch (error) {
      next(error);
    }
  },
);

router.get(`${prefix}/me/:followingId`, (req, res, next) => {
  try {
    res
      .status(200)
      .json(followModule.getFollowers({ followingId: req.params.followingId }));
  } catch (error) {
    next(error);
  }
});

router.get(`${prefix}/:followerId`, (req, res, next) => {
  try {
    res
      .status(200)
      .json(followModule.getFollowing({ followerId: req.params.followerId }));
  } catch (error) {
    next(error);
  }
});

export const follow = { router, prefix };
