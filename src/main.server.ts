import 'zone.js/node';
import {AppServerModule} from './app/app.server.module';

import {APP_BASE_HREF} from '@angular/common';
import {CommonEngine} from '@angular/ssr';
import * as express from 'express';
import {join, resolve} from 'node:path';
import {LOCALE_ID} from "@angular/core";

export function app(appDir: string, lang: string): express.Express {
  const app = express();

  const browserFolder = resolve(`${appDir}/browser/${lang}`);
  const indexHtml =    join(browserFolder, 'index.html');

  const commonEngine = new CommonEngine();

  app.set('view engine', 'html');
  app.set('views', browserFolder);

  app.get('*.*', express.static(browserFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  app.get('*', (req, res, next) =>
    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${req.protocol}://${req.headers.host}${req.originalUrl}`,
        publicPath: browserFolder,
        providers: [
          {provide: APP_BASE_HREF, useValue: req.baseUrl},
          {provide: LOCALE_ID, useValue: lang}
        ],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err))
  );

  return app;
}
