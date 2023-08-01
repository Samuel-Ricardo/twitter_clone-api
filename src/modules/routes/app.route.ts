import { Router } from 'express';
import { user_routes } from './user';

const routes = Router();

routes.get('/', (req, res) => {
  res.send({ message: 'Hello World! :D' });
});

routes.use(user_routes);

export { routes };
