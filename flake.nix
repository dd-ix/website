{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
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
            website = pkgs.callPackage ./derivation.nix {
              contentApi = "https://content.dd-ix.net";
            };
            website-static = pkgs.callPackage ./derivation.nix {
              contentApi = "https://content.dd-ix.net";
              static = true;
            };
            default = website;
          };
        }
      ) // {
      overlays.default = _: prev: {
        website = self.packages."${prev.system}".website;
      };

      nixosModules = rec {
        website = import ./module.nix;
        default = website;
      };
    };
}
