export const SocketRegistry = {
  IO: Symbol.for('socket.io'),
  INSTANCE: {
    IO: Symbol.for('instamce.socket.io'),
  },
  FUNCTIONAL: {
    IO: Symbol.for('functional.socket.io'),
  },
};
