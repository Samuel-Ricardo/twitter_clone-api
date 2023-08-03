import { Router } from 'express';
import { user_routes } from './user';

const routes = Router();

routes.get('/', (req, res, next) => {
  try {
    res.send({ data: 'Hello World! :D' });
  } catch (e) {
    next(e);
  }
});

routes.use(user_routes);

export { routes };
