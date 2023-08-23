import { Server, createServer } from 'node:http';
import { injectable } from 'inversify';
import { Application } from '@modules/manager';

@injectable()
export class HTTPServer {
  server: Server;

  constructor() {
    this.server = createServer(Application.Instance());
  }

  get instance() {
    return this.server;
  }
}
