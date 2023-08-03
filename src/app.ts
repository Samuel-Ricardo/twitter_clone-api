import 'reflect-metadata';
import { SwaggerModule } from './modules/documentation';
import { MODULES } from '@modules';

const app = MODULES.APP();

SwaggerModule.setup({ app });

app.use(MODULES.BODY_PARSER());
app.use(MODULES.ROUTER());

export { app };
