import { SocketModule } from './socket.module';
import { SocketIO, setup } from './socket';
import { SocketRegistry } from './socket.registry';
import { ISocketIOConfig } from '@Type/socket/config';

export const SocketFactory = {
  IO: SocketModule.get<SocketIO>(SocketRegistry.IO),
  FUNCTIONAL: {
    IO: (config: ISocketIOConfig) =>
      SocketModule.get<typeof setup>(SocketRegistry.FUNCTIONAL.IO)(config),
  },
};
