import { MODULES } from '../../app.factory';
import { Router } from 'express';

const prefix = '/users';
const USER = MODULES.USER.DEFAULT();
const user_routes = Router();

user_routes.get(prefix, (req, res) => {
  res.send(USER.seletcAll());
});

export { user_routes };
