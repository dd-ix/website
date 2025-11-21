{
  inputs = {
    nixpkgs.url = "github:NuschtOS/nuschtpkgs/backports-25.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = (import nixpkgs) {
            inherit system;
          };
        in
        {
          packages = rec {
            ddix-website = pkgs.callPackage ./package.nix {
              contentApi = "https://content.dd-ix.net";
            };
            ddix-website-static = pkgs.callPackage ./package.nix {
              contentApi = "https://content.dd-ix.net";
              static = true;
            };
            default = ddix-website;
          };
        }
      ) // {
      overlays.default = _: prev: {
        inherit (self.packages."${prev.system}") ddix-website;
      };

      nixosModules = rec {
        ddix-website = import ./module.nix;
        default = ddix-website;
      };
    };
}
