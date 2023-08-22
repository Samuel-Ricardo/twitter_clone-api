import { SocketModule } from './socket.module';
import { setup } from './socket';
import { SocketRegistry } from './socket.registry';
import { ISocketIOConfig } from '@Type/socket/config';

export const SocketFactory = {
  IO: (config: ISocketIOConfig) =>
    SocketModule.get<typeof setup>(SocketRegistry.IO)(config),
};
