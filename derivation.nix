{ domain, mkPnpmPackage, static ? false }:

mkPnpmPackage {
  src = ./.;

  installInPlace = true;

  postPatch = ''
    substituteInPlace src/app/api/api.domain.ts \
      --replace 'http://127.0.0.1:8080' 'https://content.${domain}'
  '';

  script = if static then "build:static" else "build:ci";

  installPhase = ''
    mkdir -p $out
    cp -r ./dist/* $out/
  '';
}
