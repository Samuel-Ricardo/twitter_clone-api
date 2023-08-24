import { app, server, socket } from '@/app';
import supertest from 'supertest';

import { createServer } from 'http';
import { Server } from 'socket.io';
import Client from 'socket.io-client';
import { Socket as ClientSocket } from 'socket.io-client';
import { Socket as SocketServer } from 'socket.io';
import { EVENTS } from '../../src/modules/reactive/reactive.config';

describe('[API] | health check', () => {
  it('should be healthy', async () => {
    const response = await supertest(server).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: 'Hello World! :D' });
  });
});

describe('[WEBSOCKET] | health check', () => {
  let serverSocket: SocketServer;
  let clientSocket: ClientSocket;

  beforeAll((done) => {
    server.listen(8576, () => {
      clientSocket = Client('http://localhost:8576');

      socket.io.on('connection', (socket) => {
        serverSocket = socket;
      });

      clientSocket.on('connect', done);
    });
  });

  afterAll((done) => {
    socket.io.close();
    clientSocket.close();
    done();
  });

  it('[E2E] | Should: be healthy => [WEBSOCKET]', (done) => {
    clientSocket.on(EVENTS.HEALTH_CHECK, (data: string) => {
      expect(data).toBe('Hello World! :D');
      done();
    });

    serverSocket.emit(EVENTS.HEALTH_CHECK, 'Hello World! :D');
  });
});
