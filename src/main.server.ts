import 'zone.js/node';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {AppServerModule} from './app/app.server.module';
import * as express from "express";
import {resolve} from "path";
import {LOCALE_ID} from "@angular/core";

export async function app(appDir: string, lang: string): Promise<express.Express> {
  const app = express();

  const browserFolder = resolve(`${appDir}/browser/${lang}`);

  app.engine("html", ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [{provide: LOCALE_ID, useValue: lang}],
  }));

  app.set('view engine', 'html');
  app.set('views', browserFolder);

  app.get('*.*', express.static(browserFolder, {
    maxAge: '1y'
  }));

  app.get('*', (req, res) => {
    res.render("index", {req});
  });

  return app;
}

