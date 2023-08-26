import { SocketIO } from '../../../../reactive/socket_io/socket';
import { IReactiveNotification } from '../../../../@core/notification/reactive';
import { NotificationController } from '../../../../@core/notification/controller';
import { Socket } from 'socket.io';
import { inject, injectable } from 'inversify';
import { MODULE } from '@modules/app.registry';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { EVENTS } from '@modules/reactive/reactive.config';
import { ICreateNotificationDTO } from '@Core/notification/DTO';

@injectable()
export class NotificationSocket implements IReactiveNotification<Socket> {
  private readonly room = 'notifications';

  constructor(
    @inject(MODULE.REACTIVE.SOCKET.IO)
    private readonly socket: SocketIO,
    @inject(MODULE.NOTIFICATION.CONTROLLER)
    private readonly notification: NotificationController,
  ) {
    this.subscribe();
  }
}
