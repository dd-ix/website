{ lib, stdenv, nodejs, pnpm, contentApi, static ? false }:

let
  manifest = lib.importJSON ./package.json;
in
stdenv.mkDerivation (finalAttrs: {
  pname = manifest.name;
  inherit (manifest) version;

  src = lib.cleanSource ./.;

  pnpmDeps = pnpm.fetchDeps {
    inherit (finalAttrs) pname version src;
    fetcherVersion = 2;
    hash = "sha256-CE40fCAN7FsNCmJujojT2jSbEamjxf/iUfQYEMp737Y=";
  };

  nativeBuildInputs = [ nodejs pnpm.configHook ];

  postPatch = ''
    substituteInPlace src/app/api/api.domain.ts \
      --replace-fail 'https://content.dd-ix.net' '${contentApi}'
  '' + lib.optionalString static ''
    substituteInPlace src/app/app.routes.server.ts \
      --replace-fail 'RenderMode.Server' 'RenderMode.Client'
  '';

  buildPhase = ''
    pnpm run ${if static then "build:static" else "build:ci"}
  '';

  installPhase = ''
    runHook preInstall
    mkdir -p $out
    cp -r ./dist/* $out/
    runHook postInstall
  '';
})
