import { CreateUserDTO, SelectUserByIdDTO, UpdateUserDTO, User } from '@User';
import { IDeleteuserDTO } from './DTO/delete.dto';
import { ISelectUserByCredentials } from './DTO/select_by_credentials.dto';

export interface IUserRepository {
  create(user: CreateUserDTO): Promise<User>;
  selectAll(): Promise<User[]>;
  selectById(props: SelectUserByIdDTO): Promise<User>;
  selectByCredentials(props: ISelectUserByCredentials): Promise<User>;
  update(props: UpdateUserDTO): Promise<User>;
  delete(props: IDeleteuserDTO): Promise<boolean>;
}
