import { injectable } from 'inversify';

@injectable()
export class CreateUserDto {
  constructor(
    public name: string,
    public username: string,
    public email: string,
    public password: string,
  ) {}
}
