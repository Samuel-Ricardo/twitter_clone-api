import { Server } from 'http';
import { SocketEvent } from './event';

export interface ISocketIOConfig {
  server: Server;
  events?: SocketEvent;
  global?: {
    events?: SocketEvent;
  };
}
