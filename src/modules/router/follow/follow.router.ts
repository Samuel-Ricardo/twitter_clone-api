import { GetFollowersSchema } from '../../@core/follow/validator/get_followers.validator';
import { CountFollowersSchema } from '../../@core/follow/validator/count_followers.validator';
import { CountFollowingsSchema } from '../../@core/follow/validator/count_followings.validator';
import { CreateFollowSchema } from '../../@core/follow/validator/create.validator';
import { DeleteFollowSchema } from '../../@core/follow/validator/delete.validator';
import { MODULES } from '../../app.factory';
import { validate } from '../../middleware/validator';
import { Router } from 'express';
import { GetFollowingsSchema } from '../../@core/follow/validator/get_followings.validator';

const prefix = '/follow';
const router = Router();

const followModule = MODULES.FOLLOW.DEFAULT();

router.post(prefix, validate(CreateFollowSchema), async (req, res, next) => {
  try {
    res.status(201).json(await followModule.follow(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete(
  `${prefix}/:id`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(DeleteFollowSchema),
  async (req, res, next) => {
    try {
      res.status(204).json(await followModule.unfollow({ id: req.params.id }));
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/count/followers/:followingId`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(CountFollowersSchema),
  async (req, res, next) => {
    try {
      res.status(200).json(
        await followModule.countFollowers({
          followingId: req.params.followingId,
        }),
      );
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/count/following/:followerId`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(CountFollowingsSchema),
  async (req, res, next) => {
    try {
      res.status(200).json(
        await followModule.countFollowing({
          followerId: req.params.followerId,
        }),
      );
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/:followingId/followers`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(GetFollowersSchema),
  async (req, res, next) => {
    try {
      res.status(200).json(
        await followModule.getFollowers({
          followingId: req.params.followingId,
        }),
      );
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/:followerId/following`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(GetFollowingsSchema),
  async (req, res, next) => {
    try {
      res.status(200).json(
        await followModule.getFollowing({
          followerId: req.params.followerId,
        }),
      );
    } catch (error) {
      next(error);
    }
  },
);

export const follow = { router, prefix };
