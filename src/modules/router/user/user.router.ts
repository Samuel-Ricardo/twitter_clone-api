import { MODULES } from '../../app.factory';
import { Router } from 'express';

const prefix = '/users';
const USER = MODULES.USER.DEFAULT();
const user_routes = Router();

user_routes.get(prefix, async (req, res) => {
  res.send(await USER.seletcAll());
});

user_routes.post(prefix, async (req, res) => {
  res.json(await USER.create(req.body));
});

user_routes.patch(prefix, async (req, res) => {
  res.json(await USER.update(req.body));
});

user_routes.delete(prefix, async (req, res) => {
  res.json(await USER.delete(req.body));
});

user_routes.get(`${prefix}/:id`, async (req, res) => {
  res.json(await USER.selectById(req.params));
});

export { user_routes };
