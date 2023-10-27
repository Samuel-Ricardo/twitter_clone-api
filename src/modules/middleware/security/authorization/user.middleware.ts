import { MODULES } from '@modules/app.factory';
import { RequestHandler } from 'express';

export const authorizeUserMiddleware: RequestHandler = async (
  req,
  res,
  next,
) => {
  const policy = MODULES.USER.POLICY.AUTHORIZATION.AUTHORIZE.ALL();

  const header = req.headers.authorization;
  const token = header?.split(' ')[1];

  if (!token)
    return res
      .status(401)
      .json({ message: 'No Token Provided or Bad Formatted' });

  if (!(await policy.execute({ id: token })))
    return res.status(403).json({ message: 'Forbidden' });

  return next();
};
