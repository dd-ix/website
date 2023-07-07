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
      mkdir -p $out/bin
      cp -r ./.output/* $out/bin/
    '';

    doDist = true;
}
