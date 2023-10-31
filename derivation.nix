{ domain, mkPnpmPackage }:

mkPnpmPackage {
    src = ./.;

    installInPlace = true;

    postPatch = ''
      substituteInPlace src/app/api/api.domain.ts \
        --replace 'http://127.0.0.1:8080' 'https://content.${domain}'
    '';

    script = "build:ci";

    installPhase = ''
      mkdir -p $out
      mkdir -p $out
      cp -r ./dist/* $out/
    '';
}
