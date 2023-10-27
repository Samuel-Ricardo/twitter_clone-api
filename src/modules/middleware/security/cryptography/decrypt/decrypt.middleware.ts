import { MODULES } from '@modules/app.factory';
import { RequestHandler } from 'express';

export const decryptMiddleware: RequestHandler = (req, res, next) => {
  const cryptographer = MODULES.SECURITY.CRYPTOGRAPHY.TURING();

  console.log({ body: req.body, params: req.params, cryptographer });

  if (req.body.encrypted)
    req.body = cryptographer.decryptIV(req.body.encrypted);

  Object.keys({ ...req.params }).forEach(
    (key) => (req.params[key] = cryptographer.decryptIV(req.params[key])),
  );

  console.log({ body2: req.body, params2: req.params });

  return next();
};
