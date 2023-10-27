import { IIsUserAuthorizedDTO } from '@User/DTO/authorizer/user.dto';

export interface IUserAuthorizer {
  isAuthorized(data: IIsUserAuthorizedDTO): boolean;
}
