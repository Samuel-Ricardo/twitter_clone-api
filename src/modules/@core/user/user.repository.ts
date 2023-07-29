import { CreateUserDto, SelectUserByIdDTO, UpdateUserDto, User } from '@User';

export interface IUserRepository {
  create(user: CreateUserDto): Promise<User>;
  selectAll(): Promise<User[]>;
  selectById(props: SelectUserByIdDTO): Promise<User>;
  update(props: UpdateUserDto): Promise<User>;
  delete(): Promise<void>;
}
