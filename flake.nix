{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
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
            website = pkgs.callPackage ./package.nix {
              contentApi = "https://content.dd-ix.net";
            };
            website-static = pkgs.callPackage ./package.nix {
              contentApi = "https://content.dd-ix.net";
              static = true;
            };
            default = website;
          };
        }
      ) // {
      overlays.default = _: prev: {
        inherit (self.packages."${prev.system}") website;
      };

      nixosModules = rec {
        website = import ./module.nix;
        default = website;
      };
    };
}
