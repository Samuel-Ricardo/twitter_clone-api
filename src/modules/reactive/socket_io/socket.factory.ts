import { SocketModule } from './socket.module';
import { setup } from './socket';
import { SocketRegistry } from './socket.registry';

export const SocketFactory = {
  IO: () => SocketModule.get<typeof setup>(SocketRegistry.IO),
};
