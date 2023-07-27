import { app } from './app';
import { SwaggerModule } from './modules/documentation';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  SwaggerModule.setup({ app, port });

  console.log('[API] | listening on: http://localhost:3000');
});
