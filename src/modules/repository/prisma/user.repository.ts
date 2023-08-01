import {
  CreateUserDTO,
  IUserRepository,
  SelectUserByIdDTO,
  UpdateUserDTO,
  User,
} from '@User';
import { IDeleteuserDTO } from '@User/DTO';
import { MODULE } from '@modules';
import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { inject, injectable, interfaces } from 'inversify';

@injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(
    @inject(MODULE.PRISMA)
    private readonly prisma: PrismaClient,
    @inject(MODULE.USER.FOR_PRISMA)
    private readonly userFactory: interfaces.Factory<User, [PrismaUser]>,
  ) {}

  async create(user: CreateUserDTO): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: { ...user },
    });

    return this.userFactory(createdUser) as User;
  }

  async selectAll(): Promise<User[]> {
    const _users = await this.prisma.user.findMany();

    const users = _users.map((user) => {
      return this.userFactory(user);
    });

    return users as User[];
  }

  async selectById(props: SelectUserByIdDTO): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: props.id },
    });

    return this.userFactory(user as PrismaUser) as User;
  }

  async update(props: UpdateUserDTO): Promise<User> {
    const data = { ...props, id: undefined };

    const updated = await this.prisma.user.update({
      where: { id: props.id },
      data: data,
    });

    return this.userFactory(updated) as User;
  }

  async delete(props: IDeleteuserDTO) {
    return !!(await this.prisma.user.delete({ where: { id: props.id } }));
  }
}
