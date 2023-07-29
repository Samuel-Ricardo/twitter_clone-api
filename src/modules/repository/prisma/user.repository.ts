import { CreateUserDTO, IUserRepository, User } from '@User';
import { MODULE } from '@modules/app.module';
import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';

@injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @inject(MODULE.PRISMA)
    private prisma: PrismaClient,
  ) {}

  async create(user: CreateUserDTO): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: user.toObject(),
    });

    return User.fromPrisma(createdUser);
  }
}
