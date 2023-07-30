import { CreateUserDTO, SelectUserByIdDTO, UpdateUserDTO, User } from '@User';
import { IDeleteuserDTO } from './DTO/delete.dto';

export interface IUserRepository {
  create(user: CreateUserDTO): Promise<User>;
  selectAll(): Promise<User[]>;
  selectById(props: SelectUserByIdDTO): Promise<User>;
  update(props: UpdateUserDTO): Promise<User>;
  delete(props: IDeleteuserDTO): Promise<boolean>;
}
