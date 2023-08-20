import { Router } from 'express';
import { user_routes } from './user';
import { post } from './post';
import { like } from './like/like.router';
import { follow } from './follow';
import { comment } from './comment';

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
routes.use(follow.router);
routes.use(comment.router);

export { routes };
