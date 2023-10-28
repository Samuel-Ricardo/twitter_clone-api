import { MODULES } from '@modules/app.factory';
import { ForbiddenError } from '@modules/error/user/forbidden.error';
import { UserNotAuthorizedError } from '@modules/error/user/not_authorized.error';
import { RequestHandler } from 'express';

export const authorizeUserMiddleware: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const policy = MODULES.USER.POLICY.AUTHORIZATION.AUTHORIZE.ALL();

    const header = req.headers.authorization;
    const token = header?.split(' ')[1];

    if (!token)
      throw new UserNotAuthorizedError('No token provided or bad formatted');

    if (!(await policy.execute({ id: token })))
      throw new ForbiddenError('User not authorized');

    return next();
  } catch (error) {
    return next(error);
  }
};
