import { MODULES } from '@modules/app.factory';
import { RequestHandler } from 'express';

export const decryptCreateUserDTOMiddleware: RequestHandler = (
  req,
  res,
  next,
) => {
  //const cypher = MODULES.CYPHER.USER();

  const turing = MODULES.SECURITY.CRYPTOGRAPHY.TURING();

  const body = req.body as { encrypted: string };

  if (!body.encrypted) return next(); //not encrypted or bad implemented

  //const user = cypher.decryptCreateUserDTO(body.encrypted);
  const user = turing.decryptIV(body.encrypted);

  return next();
};
