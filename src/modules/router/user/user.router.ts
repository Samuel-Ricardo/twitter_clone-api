import { IDeleteuserDTO } from '@User';
import { MODULES } from '../../app.factory';
import { Router } from 'express';

const prefix = '/users';
const USER = MODULES.USER.DEFAULT();
const user_routes = Router();

user_routes.get(prefix, async (req, res) => {
  res.send(await USER.seletcAll());
});

user_routes.post(
  prefix,
  MODULES.MIDDLEWARE.VALIDATOR.USER.CREATE(),
  async (req, res, next) => {
    try {
      res.json(await USER.create(req.body));
    } catch (e) {
      next(e);
    }
  },
);

user_routes.patch(
  prefix,

  MODULES.MIDDLEWARE.VALIDATOR.USER.UPDATE(),

  async (req, res, next) => {
    try {
      res.json(await USER.update(req.body));
    } catch (e) {
      next(e);
    }
  },
);

user_routes.delete(
  `${prefix}/:id`,

  MODULES.MIDDLEWARE.VALIDATOR.USER.DELETE(),

  async (req, res, next) => {
    try {
      res.json(await USER.delete({ id: req.params.id }));
    } catch (e) {
      next(e);
    }
  },
);

user_routes.get(
  `${prefix}/:id`,

  MODULES.MIDDLEWARE.VALIDATOR.USER.SELECT.BY.ID(),

  async (req, res, next) => {
    try {
      res.json(await USER.selectById({ id: req.params.id }));
    } catch (e) {
      next(e);
    }
  },
);

export { user_routes, prefix };
