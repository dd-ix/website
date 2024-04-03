{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
    flake-utils.url = "github:numtide/flake-utils";

    pnpm2nix = {
      url = "github:nzbr/pnpm2nix-nzbr";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, pnpm2nix, flake-utils, ... }:
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
              domain = "dd-ix.net";
              mkPnpmPackage = pnpm2nix.packages."${system}".mkPnpmPackage;
            };
            default = website;
          };
        }
      ) // {
      overlays.default = _: prev: {
        webiste = self.packages."${prev.system}".website;
      };

      nixosModules = rec {
        website = import ./module.nix;
        default = website;
      };
    };
}
