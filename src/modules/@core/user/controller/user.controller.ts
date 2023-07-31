import { UserService } from '@User/service/user.service';
import { inject, injectable } from 'inversify';
import { UserRegistry as USER_MODULE } from '@User/user.registry';

@injectable()
export class UserController {
  constructor(
    @inject(USER_MODULE.SERVICE.DEFAULT)
    service: UserService,
  ) {}
}
