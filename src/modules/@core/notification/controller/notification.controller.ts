import { inject, injectable } from 'inversify';
import { NotificationService } from '../service';
import { MODULE } from '@modules';

@injectable()
export class NotificationController {
  constructor(
    @inject(MODULE.NOTIFICATION.SERVICE)
    private readonly service: NotificationService,
  ) {}
}
