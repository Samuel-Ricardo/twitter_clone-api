import { NotificationController } from '../../../../src/modules/@core/notification/controller';
import { ISimulateController } from '../controller';
import { NotificationService } from '../../../../src/modules/@core/notification/service';

export interface ISimulatedNotificationController
  extends ISimulateController<NotificationService, NotificationController> {}
