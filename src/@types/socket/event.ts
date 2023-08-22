import { Socket } from 'socket.io';

export type SocketEvent = Map<
  string,
  (socket: Socket) => (...params: any[]) => void | any
>;
