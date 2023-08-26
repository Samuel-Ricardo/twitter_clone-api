import { Notification } from '../entity';
import { injectable } from 'inversify';

@injectable()
export class JustVisualizeOneTimePolicy {
  verify(notification: Notification): boolean {
    return !notification.visualizedAt;
  }
}
