import 'zone.js/fesm2015/zone-node.js';
import express from "express";

async function app(appDir: string, lang: string): Promise<express.Express> {
  const app = express();

  const serverFolder = `${appDir}/server/${lang}`;
  const browserFolder = `${appDir}/browser/${lang}`;

  const {default: module} = await import(`${serverFolder}/main.js`);

  app.engine("html", module.ngExpressEngine({
    bootstrap: module.AppServerModule
  }));

  app.set('view engine', 'html');
  app.set('views', browserFolder);

  app.get('*.*', express.static(browserFolder, {
    maxAge: '1y'
  }));

  app.get('*', (req, res) => res.render("index", {req}));

  return app;
}

async function main() {
  const port = process.env['PORT'] ?? 4000;
  const appDir = process.env['APP_DIR'] ?? ".";

  const server = express();

  const [de, en] = await Promise.all([app(appDir, "de"), app(appDir, "en")]);

  server.use("/de/", de);
  server.use("/en/", en);

  server.listen(port, () => console.log(`Listening on http://127.0.0.1:${port}...`));
}

main().then();
