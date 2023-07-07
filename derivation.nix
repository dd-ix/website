{ pkgs, lib, config, mkYarnPackage, yarn }:
mkYarnPackage {
    name = "dd-ix-website";
    src = ./.;

    buildInputs = [ yarn ];
    postPatch = ''
    '';

    buildPhase = ''
      yarn run generate
    '';

    installPhase = ''
      mkdir -p $out/bun
      cp -r ./deps/dd-ix-website/dist/ $out/bin/
    '';

    doDist = false;
}
