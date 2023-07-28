import { SwaggerModule } from './modules/documentation';
import { Application } from '@modules';

const app = Application.Instance();

SwaggerModule.setup({ app });

app.get('/', (req, res) => {
  res.send({ result: 'Hello World!' });
});

export { app };
