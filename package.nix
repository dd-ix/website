{ lib, stdenv, nodejs, pnpm, contentApi, static ? false }:

let
  manifest = lib.importJSON ./package.json;
in
stdenv.mkDerivation (finalAttrs: {
  pname = "website";
  inherit (manifest) version;

  src = lib.cleanSourceWith {
    filter = name: type: ((!lib.hasSuffix ".nix" name) && (builtins.dirOf name) != "node_modules");
    src = lib.cleanSource ./.;
  };

  pnpmDeps = pnpm.fetchDeps {
    inherit (finalAttrs) pname version src;
    hash = "sha256-qjDeQzVYKPqD+Ly5jEdD/48G+27F+pnBDH8Lc9XE/S8=";
  };

  nativeBuildInputs = [ nodejs pnpm.configHook ];

  postPatch = ''
    substituteInPlace src/app/api/api.domain.ts \
      --replace-fail 'https://content.dd-ix.net' '${contentApi}'
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
