import { Container } from 'inversify';
import { SocketIORegistry } from './socket.registry';
import { setup } from './socket';

export const SocketIOModule = new Container({ autoBindInjectable: true });

SocketIOModule.bind<typeof setup>(SocketIORegistry.IO).toConstantValue(setup);
