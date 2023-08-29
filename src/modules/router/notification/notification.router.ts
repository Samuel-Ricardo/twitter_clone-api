import { CreateNotificationSchema } from '@Core/notification/validator';
import { MODULES } from '@modules';
import { validate } from '../../middleware/validator';
import { Router } from 'express';

const prefix = '/notifications';
const router = Router();
const notification = MODULES.NOTIFICATION.DEFAULT();

router.post(
  prefix,
  validate(CreateNotificationSchema),
  async (req, res, next) => {
    try {
      res.status(201).json(await notification.create(req.body));
    } catch (error) {
      next(error);
    }
  },
);
