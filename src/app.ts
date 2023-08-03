import 'reflect-metadata';
import { SwaggerModule } from './modules/documentation';
import { MODULES } from '@modules';

const app = MODULES.APP();

SwaggerModule.setup({ app });

app.use(MODULES.BODY_PARSER());
app.use(MODULES.MIDDLEWARE.LOGGER.APP());
app.use(MODULES.ROUTER());
app.use(MODULES.MIDDLEWARE.LOGGER.ERROR());
app.use(MODULES.MIDDLEWARE.ERROR());

export { app };
