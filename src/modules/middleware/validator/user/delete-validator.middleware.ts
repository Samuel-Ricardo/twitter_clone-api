import { USER_MODULE } from '@User';
import { RequestHandler } from 'express';

export const validateDeleteUserDTO: RequestHandler = (req, res, next) => {
  try {
    USER_MODULE.VALIDATOR().validateDeleteDTO({ id: req.params.id });
    next();
  } catch (e) {
    next(e);
  }
};
