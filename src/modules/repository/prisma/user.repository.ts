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
import { inject, injectable } from 'inversify';

@injectable()
export class PrismaUserRepository implements IUserRepository {
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

  async selectAll(): Promise<User[]> {
    return User.fromPrismaArray(await this.prisma.user.findMany());
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

  async delete(props: IDeleteuserDTO) {
    return !!(await this.prisma.user.delete({ where: { id: props.id } }));
  }
}
