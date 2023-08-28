import 'reflect-metadata';
import { SwaggerModule } from './modules/documentation';
import { MODULES } from '@modules';

const app = MODULES.APP();
const socket = MODULES.REACTIVE.SOCKET.IO;
const server = socket.server.instance;

SwaggerModule.setup({ app: app });

app.use(MODULES.BODY_PARSER());
app.use(MODULES.MIDDLEWARE.LOGGER.APP());
app.use(MODULES.ROUTER.EXPRESS());
app.use(MODULES.MIDDLEWARE.LOGGER.ERROR());
app.use(MODULES.MIDDLEWARE.ERROR());

MODULES.MIDDLEWARE.REACTIVE.LOGGER.APP();
MODULES.MIDDLEWARE.REACTIVE.LOGGER.ERROR();
MODULES.MIDDLEWARE.REACTIVE.ERROR();

MODULES.ROUTER.REACTIVE.SOCKET.ALL();

export { app, socket, server };
