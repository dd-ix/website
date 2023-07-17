import express from "express";
import {resolve} from 'path';

async function app(appDir: string, lang: string): Promise<express.Express> {
  const serverFolder = resolve(`${appDir}/server/${lang}`);

  const {default: module} = await import(`${serverFolder}/main.js`);

  return module.app(appDir, lang);
}

async function main() {
  const port = process.env['PORT'] ?? 4000;
  const appDir = process.env['APP_DIR'] ?? ".";

  const server: express.Express = express();

  const [de, en] = await Promise.all([
    app(appDir, "de"),
    app(appDir, "en")
  ]);

  server.use("/de/", de);
  server.use("/en/", en);

  server.all("*", (req, res) => {
    const languages = req.acceptsLanguages();
    let target = 'en';

    if (languages) {
      for (let language of languages) {
        if (language.indexOf('-') == 2) {
          language = language.substring(0, 2);
        }

        language = language.toLowerCase();

        if (language === 'de') {
          target = 'de';
          break;
        } else if (language === 'en') {
          target = 'en';
          break;
        }
      }
    }

    res.redirect(`/${target}${req.url}`)
  });

  server.listen(port, () => console.log(`Listening on http://127.0.0.1:${port}...`));
}

main().then();
