import { UserService } from '@User/service/user.service';
import { injectable } from 'inversify';

@injectable()
export class UserController {
  constructor(service: UserService) {}
}
