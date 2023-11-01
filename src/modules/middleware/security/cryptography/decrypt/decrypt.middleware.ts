import { MODULES } from '@modules/app.factory';
import { RequestHandler } from 'express';

export const decryptMiddleware: RequestHandler = async (req, res, next) => {
  const cryptographer = MODULES.SECURITY.CRYPTOGRAPHY.TURING();

  if (req.body.encrypted)
    req.body = JSON.parse(cryptographer.decryptIV(req.body.encrypted));

  Object.keys({ ...req.params }).forEach((key) => {
    req.params[key] = cryptographer.decryptIV(req.params[key]);
  });

  return next();
};
