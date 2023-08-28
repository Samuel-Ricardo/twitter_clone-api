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
  ISetNotificationVisualizedDTO,
} from '@Core/notification/DTO';
import { CreateNotificationSchema } from '@Core/notification/validator';
import { IAppEvents } from '@modules/event/app';
import { SetVisualizedSchema } from '@Core/notification/validator/set_visualized.validator';

@injectable()
export class NotificationSocket implements IReactiveNotification<Socket> {
  private readonly room = 'notifications';

  constructor(
    @inject(MODULE.REACTIVE.SOCKET.IO)
    private readonly socket: SocketIO,
    @inject(MODULE.NOTIFICATION.CONTROLLER)
    private readonly notification: NotificationController,
    @inject(MODULE.EVENTS.NODE.APP)
    private readonly app: IAppEvents,
  ) {
    this.subscribe();
  }

  async subscribe() {
    this.socket.io.on(EVENTS.CONNECTION, (socket) => {
      this.subscribeToNewNotification(socket);
      this.subscribeToNotificationVisualized(socket);
    });
  }

  async subscribeToNewNotification(socket: Socket) {
    socket.on(
      EVENTS.NOTIFICATION.NEW,
      async (notification: ICreateNotificationDTO) => {
        try {
          CreateNotificationSchema.parse(notification);

          const result = await this.notification.create(notification);

          this.publishNotificationCreated(
            result.notification.toStruct(),
            socket,
          );
        } catch (error: any) {
          this.app.publishErrorEvent({ error, socket });
        }
      },
    );
  }

  async subscribeToNotificationVisualized(socket: Socket) {
    socket.on(
      EVENTS.NOTIFICATION.VISUALIZED,
      async (notification: ISetNotificationVisualizedDTO) => {
        try {
          SetVisualizedSchema.parse(notification);

          const result = await this.notification.visualize(notification);

          this.publishNotificationVisualized(
            result.notification.toStruct(),
            socket,
          );
        } catch (error: any) {
          this.app.publishErrorEvent({ error, socket });
        }
      },
    );
  }

  async publishNotificationCreated(
    notification: INotificationDTO,
    socket?: Socket,
  ) {
    socket
      ? socket.emit(EVENTS.NOTIFICATION.CREATED, notification)
      : this.socket.io.emit(EVENTS.NOTIFICATION.CREATED, notification);
  }

  async publishNotificationVisualized(
    notification: INotificationDTO,
    socket?: Socket,
  ) {
    socket
      ? socket.emit(EVENTS.NOTIFICATION.VISUALIZED, notification)
      : this.socket.io.emit(EVENTS.NOTIFICATION.VISUALIZED, notification);
  }

  async setupToggleNotification(socket: Socket) {
    if (this.room in socket.rooms) return socket.leave(this.room);
    return socket.join(this.room);
  }
}
