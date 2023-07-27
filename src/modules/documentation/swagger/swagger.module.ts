import { Express } from 'express';
import Swagger from 'swagger-ui-express';
import SwaggerConfig from '../../../../swagger.json';

export class SwaggerModule {
  private static server() {
    return Swagger.serve;
  }

  private static initialize() {
    return Swagger.setup(SwaggerConfig);
  }

  private static shouldRun(enable_on_prod?: boolean) {
    return true;
  }

  static setup(props: {
    app: Express;
    port?: number | string;
    route?: string;
    enable_on_prod?: boolean;
  }) {
    if (!this.shouldRun(props.enable_on_prod)) return;

    const { app, port, route } = props;
    const doc_route = !route ? '/docs' : route;

    app.use(doc_route, this.server(), this.initialize());

    app.get(`${doc_route}-json`, (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(SwaggerConfig);
    });

    if (port)
      console.log(
        `[DOCS] | Swagger UI is available at http://localhost:${port}${doc_route}`,
      );
    console.log(
      `[DOCS] | Documentation schema is available at http://localhost:${port}${doc_route}-json`,
    );
  }
}
