import { IEncriptedIV } from '@Type/security/cryptography/iv/encrypted';
import { MODULES } from '@modules/app.factory';
import { RequestHandler } from 'express';

export const decryptCreateUserDTOMiddleware: RequestHandler = (
  req,
  res,
  next,
) => {
  const cypher = MODULES.CYPHER.USER();

  const body = req.body as IEncriptedIV;
  if (!body.iv) return next(); //not encrypted or bad implemented

  return next(cypher.decryptCreateUserDTO(body));
};
