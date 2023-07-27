import expresss from 'express';
import { SwaggerModule } from './modules/documentation';

class Application {
  private static instance?: expresss.Express;

  public static Instance() {
    if (!Application.instance) Application.instance = expresss();
    return Application.instance;
  }

  public static reloadInstance() {
    Application.instance = expresss();
    return Application.Instance();
  }

  public static newUniqueInstance() {
    return expresss();
  }
}

const app = Application.Instance();

SwaggerModule.setup({ app });

app.get('/', (req, res) => {
  res.send({ result: 'Hello World!' });
});

export { app };
