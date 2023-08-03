import { USER_MODULE } from '@User';
import { RequestHandler } from 'express';

export const validateUpdateUserDTO: RequestHandler = (req, res, next) => {
  try {
    USER_MODULE.VALIDATOR().validateUpdateDTO(req.body);
  } catch (error) {
    next(error);
  }
};
