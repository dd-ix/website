{ contentApi, mkPnpmPackage, static ? false }:

mkPnpmPackage {
  src = ./.;

  installInPlace = true;

  postPatch = ''
    substituteInPlace src/app/api/api.domain.ts \
      --replace-fail 'https://content.dd-ix.net' '${contentApi}'
  '';

  script = if static then "build:static" else "build:ci";

  installPhase = ''
    mkdir -p $out
    cp -r ./dist/* $out/
  '';
}
