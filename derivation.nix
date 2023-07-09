{ pkgs, lib, config, mkYarnPackage, yarn }:
mkYarnPackage {
    name = "dd-ix-website";
    src = ./.;

    buildInputs = [ yarn ];
    postPatch = ''
      substituteInPlace nuxt.config.json \
        --replace 'http://localhost:3000' 'https://${domain}'
    '';

    buildPhase = ''
      FILE=$(readlink ./deps/dd-ix-website/node_modules)
      rm ./deps/dd-ix-website/node_modules
      mkdir ./deps/dd-ix-website/node_modules
      cp -r $FILE/ ./deps/dd-ix-website/
      cp -r ./node_modules/* ./deps/dd-ix-website/node_modules/

      yarn run generate
    '';

    installPhase = ''
      mkdir -p $out/bun
      cp -r ./deps/dd-ix-website/dist/ $out/bin/
    '';

    doDist = false;
}
