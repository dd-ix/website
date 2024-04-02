{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";

    pnpm2nix = {
      url = "github:nzbr/pnpm2nix-nzbr";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.flake-utils.follows = "flake-utils";
    };

    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, pnpm2nix, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          package = pkgs.callPackage ./derivation.nix {
            domain = "dd-ix.net";
            mkPnpmPackage = pnpm2nix.packages."${system}".mkPnpmPackage;
          };
        in
        rec {
          checks = packages;
          packages = {
            website = package;
            default = package;
          };
        }
      ) // {
      overlays.default = final: prev: {
        inherit (self.packages.${prev.system})
          website;
      };

      nixosModules = rec {
        default = website;
        website = import ./nixos-module;
      };
    };
}
