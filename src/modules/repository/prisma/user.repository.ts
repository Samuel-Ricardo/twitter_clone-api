import {
  CreateUserDTO,
  IUserRepository,
  SelectUserByIdDTO,
  UpdateUserDTO,
  User,
} from '@User';
import { MODULE } from '@modules/app.module';
import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { inject, injectable } from 'inversify';

@injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @inject(MODULE.PRISMA)
    private prisma: PrismaClient,
  ) {}

  async create(user: CreateUserDTO): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: { ...user },
    });

    return User.fromPrisma(createdUser);
  }

  async selectById(props: SelectUserByIdDTO): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: props.id },
    });

    return User.fromPrisma(user as PrismaUser);
  }

  async update(props: UpdateUserDTO): Promise<User> {
    const data = { ...props, id: undefined };

    const updated = await this.prisma.user.update({
      where: { id: props.id },
      data: data,
    });

    return User.fromPrisma(updated);
  }
}
