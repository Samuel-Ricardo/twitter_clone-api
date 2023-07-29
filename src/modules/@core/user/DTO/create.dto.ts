import { injectable } from 'inversify';

@injectable()
export class CreateUserDTO {
  constructor(
    public name: string,
    public username: string,
    public email: string,
    public password: string,
  ) {}

  toObject() {
    return {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
    };
  }
}
