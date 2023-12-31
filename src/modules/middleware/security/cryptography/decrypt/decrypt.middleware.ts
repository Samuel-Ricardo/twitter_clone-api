import { MODULES } from '@modules/app.factory';
import { RequestHandler } from 'express';

export const decryptMiddleware: RequestHandler = async (req, res, next) => {
  try {
    const cryptographer = MODULES.SECURITY.CRYPTOGRAPHY.TURING();

    const encrypted = req.body.encrypted;

    if (req.body.encrypted)
      req.body = JSON.parse(cryptographer.decryptIV(req.body.encrypted));

    Object.keys({ ...req.params }).forEach((key) => {
      req.params[key] = cryptographer.decryptIV(req.params[key]);
    });

    encrypted &&
      console.log({
        encrypted,
        decrypted: JSON.parse(cryptographer.decryptIV(encrypted)),
      });

    return next();
  } catch (e) {
    return next();
  }
};

export const decryptParamsMiddleware: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    Object.keys({ ...req.params }).forEach((key) => {
      req.params[key] = MODULES.SECURITY.CRYPTOGRAPHY.TURING().decryptIV(
        req.params[key],
      );
    });

    return next();
  } catch (e) {
    return next();
  }
};
