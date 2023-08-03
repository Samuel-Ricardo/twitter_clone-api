import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const ERROR_MIDDLEWARE: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(500).json({ error });
};
