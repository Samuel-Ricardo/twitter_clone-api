import { Server } from 'http';
import { SocketEvent } from './event';

export interface ISocketIOConfig {
  http: Server;
  events?: SocketEvent;
  global?: {
    events?: SocketEvent;
  };
}
