import { CreateUserDTO, SelectUserByIdDTO, UpdateUserDTO, User } from '@User';
import { IDeleteuserDTO } from './DTO/delete.dto';
import { ISelectUserByCredentialsDTO } from './DTO/select_by_credentials.dto';
import { ISelectUserByEmailDTO } from './DTO/select_by_email.dto';

export interface IUserRepository {
  create(user: CreateUserDTO): Promise<User>;
  selectAll(): Promise<User[]>;
  selectById(props: SelectUserByIdDTO): Promise<User>;
  selectByCredentials(props: ISelectUserByCredentialsDTO): Promise<User>;
  selectByEmail(props: ISelectUserByEmailDTO): Promise<User>;
  update(props: UpdateUserDTO): Promise<User>;
  delete(props: IDeleteuserDTO): Promise<boolean>;
}
