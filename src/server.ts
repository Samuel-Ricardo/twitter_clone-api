import { app } from './app';
import { ENV } from './modules/config/env';
import { SwaggerModule } from './modules/documentation';

app.listen(ENV.PORT, () => {
  SwaggerModule.logs();
  console.log(`[API] | listening on: http://localhost:${ENV.PORT}`);
});
