import {
  CreateNotificationSchema,
  DeleteNotificationSchema,
  GetNotificationByUserSchema,
} from '../../@core/notification/validator';
import { MODULES } from '../../app.factory';
import { validate } from '../../middleware/validator';
import { Router } from 'express';

const prefix = '/notifications';
const router = Router();
const notification_module = MODULES.NOTIFICATION.DEFAULT();

router.post(
  prefix,
  validate(CreateNotificationSchema),
  async (req, res, next) => {
    try {
      res.status(201).json(await notification_module.create(req.body));
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  `${prefix}/:id`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(DeleteNotificationSchema),
  async (req, res, next) => {
    try {
      res
        .status(204)
        .json(await notification_module.delete({ id: req.params.id }));
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  `${prefix}/user/:userId`,
  MODULES.MIDDLEWARE.SECURITY.CRYPTOGRAPHY.DECRYPT.PARAMS(),
  validate(GetNotificationByUserSchema),
  async (req, res, next) => {
    try {
      res.status(200).json(
        await notification_module.listUserNotifications({
          userId: req.params.userId,
        }),
      );
    } catch (error) {
      next(error);
    }
  },
);

export const notification = { router, prefix };
