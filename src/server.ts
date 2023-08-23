import { server } from '@/app';
import { log } from '@modules';
import { ENV } from '@env';
import { SwaggerModule } from '@modules/documentation';

server.listen(ENV.PORT, () => {
  SwaggerModule.logs();
  log({
    context: 'API',
    message: `listening on: http://localhost:${ENV.PORT}`,
  });
});
