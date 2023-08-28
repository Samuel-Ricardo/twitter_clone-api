import { SocketIO } from '../../../../reactive/socket_io/socket';
import { IReactiveNotification } from '../../../../@core/notification/reactive';
import { NotificationController } from '../../../../@core/notification/controller';
import { Socket } from 'socket.io';
import { inject, injectable } from 'inversify';
import { MODULE } from '@modules';
import { EVENTS } from '../../../../reactive/reactive.config';
import {
  ICreateNotificationDTO,
  INotificationDTO,
} from '@Core/notification/DTO';

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

  subscribe() {
    this.socket.io.on(EVENTS.CONNECTION, (socket) => {
      this.subscribeToNewNotification(socket);
    });
  }

  async subscribeToNewNotification(socket: Socket) {
    socket.on(
      EVENTS.NOTIFICATION.NEW,
      async (notification: ICreateNotificationDTO) => {
        try {
          const result = await this.notification.create(notification);
          this.publishNotificationCreated(result.notification, socket);
        } catch (error) {
          socket.emit('error', error);
        }
      },
    );
  }

  async publishNotificationCreated(
    notification: INotificationDTO,
    socket: Socket,
  ) {
    socket
      ? socket.emit(EVENTS.NOTIFICATION.CREATED, notification)
      : this.socket.io.emit(EVENTS.NOTIFICATION.CREATED, notification);
  }
}
