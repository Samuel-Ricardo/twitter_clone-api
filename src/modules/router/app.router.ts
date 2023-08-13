import { Router } from 'express';
import { user_routes } from './user';
import { post } from './post';
import { like } from './like/like.router';

const routes = Router();

routes.get('/', (req, res, next) => {
  try {
    res.send({ data: 'Hello World! :D' });
  } catch (e) {
    next(e);
  }
});

routes.use(user_routes);
routes.use(post.router);
routes.use(like.router);

export { routes };
