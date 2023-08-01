import 'reflect-metadata';
import { SwaggerModule } from '@modules/documentation';
import { MODULES } from '@modules';

const app = MODULES.APP();

SwaggerModule.setup({ app });
app.use(MODULES.ROUTES());

export { app };
