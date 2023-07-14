{ pkgs, lib, config, domain, mkYarnPackage, yarn }:
mkYarnPackage {
    name = "presence";
    src = ./.;

    buildInputs = [ yarn ];
    postPatch = ''
    '';

    buildPhase = ''
      FILE=$(readlink ./deps/presence/node_modules)
      rm ./deps/presence/node_modules
      mkdir ./deps/presence/node_modules
      cp -r $FILE/ ./deps/presence/

      chmod -R 777 ./deps/presence
      cp -r ./node_modules/* ./deps/presence/node_modules/
      yarn run build:ssr
    '';

    installPhase = ''
      mkdir -p $out/dist
      cp -r ./deps/presence/dist/* $out/dist/
    '';

    doDist = false;
}
