import { injectable } from 'inversify';

@injectable()
export class SelectUserByIdDTO {
  constructor(public id: number) {}
}
