import { USER_MODULE } from '@User';
import { RequestHandler } from 'express';

export const validateSelectUserByIdDTO: RequestHandler = (req, res, next) => {
  try {
    USER_MODULE.VALIDATOR().validateSelectByIdDTO({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};
