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
} from '../../../../@core/notification/DTO';
import { CreateNotificationSchema } from '../../../../@core/notification/validator';
import { IAppEvents } from '../../../../event/app';
import { SetVisualizedSchema } from '../../../../@core/notification/validator/set_visualized.validator';
import { INotificationEvents } from '../../../../@core/notification/events';

@injectable()
export class NotificationSocket implements IReactiveNotification<Socket> {
  public readonly room = 'notifications';

  constructor(
    @inject(MODULE.REACTIVE.SOCKET.IO)
    private readonly socket: SocketIO,
    @inject(MODULE.NOTIFICATION.CONTROLLER)
    private readonly notification: NotificationController,
    @inject(MODULE.EVENTS.NODE.APP)
    private readonly app: IAppEvents,
    @inject(MODULE.EVENTS.NODE.NOTIFICATION)
    private readonly notificationEvents: INotificationEvents,
  ) {
    this.setup();
  }

  async setup() {
    this.subscribe();
    this.listen();
  }

  async listen() {
    this.notificationEvents.listenNotificationCreated({
      job: (data) => this.publishNotificationCreated(data),
    });

    this.notificationEvents.listenNotificationVisualized({
      job: (data) => this.publishNotificationVisualized(data),
    });
  }

  async subscribe() {
    this.socket.io.on(EVENTS.CONNECTION, (socket) => {
      this.subscribeToNewNotification(socket);
      this.subscribeToNotificationVisualized(socket);
      this.setupToggleNotification(socket);
    });
  }

  async subscribeToNewNotification(socket: Socket) {
    socket.on(
      EVENTS.NOTIFICATION.NEW,
      async (notification: ICreateNotificationDTO) => {
        try {
          CreateNotificationSchema.parse(notification);
          this.notification.create(notification);
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
            {
              id: result.notification.id,
              visualizedAt: result.notification.visualizedAt!,
            },
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
      ? socket.to(this.room).emit(EVENTS.NOTIFICATION.CREATED, notification)
      : this.socket.io
          .to(this.room)
          .emit(EVENTS.NOTIFICATION.CREATED, notification);
  }

  async publishNotificationVisualized(
    notification: ISetNotificationVisualizedDTO,
    socket?: Socket,
  ) {
    socket
      ? socket.to(this.room).emit(EVENTS.NOTIFICATION.VISUALIZED, notification)
      : this.socket.io
          .to(this.room)
          .emit(EVENTS.NOTIFICATION.VISUALIZED, notification);
  }

  async setupToggleNotification(socket: Socket) {
    socket.on(EVENTS.NOTIFICATION.TOGGLE, async () => {
      if (this.room in socket.rooms) return socket.leave(this.room);
      socket.join(this.room);
    });
  }
}
