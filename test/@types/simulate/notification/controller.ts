import { NotificationController } from '@Core/notification/controller';
import { ISimulateController } from '../controller';
import { NotificationService } from '@Core/notification/service';

export interface ISimulatedNotificationController
  extends ISimulateController<NotificationService, NotificationController> {}
