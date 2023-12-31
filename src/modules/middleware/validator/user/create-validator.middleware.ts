import { USER_MODULE } from '@User';
import { RequestHandler } from 'express';

export const validateCreateUserData: RequestHandler = (req, res, next) => {
  try {
    USER_MODULE.VALIDATOR().validateCreateDTO(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
