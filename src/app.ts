import 'reflect-metadata';
import { SwaggerModule } from './modules/documentation';
import { MODULES } from '@modules';
import { EVENTS } from './modules/reactive/reactive.config';

const app = MODULES.APP();
const socket = MODULES.REACTIVE.SOCKET.IO;
const server = socket.server.instance;

SwaggerModule.setup({ app: app });

app.use(MODULES.BODY_PARSER());
app.use(MODULES.MIDDLEWARE.LOGGER.APP());
app.use(MODULES.ROUTER());
app.use(MODULES.MIDDLEWARE.LOGGER.ERROR());
app.use(MODULES.MIDDLEWARE.ERROR());

socket.io.on(EVENTS.START.CONNECTION, (data) => {
  console.log({ data });
  socket.io.emit(EVENTS.HEALTH_CHECK, { setup: true });
});

export { app, socket, server };
