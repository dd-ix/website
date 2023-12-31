{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.05";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils, ... }:
    utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          package-production = pkgs.callPackage ./derivation.nix {
            domain = "dd-ix.net";
          };
        in
        rec {
          checks = packages;
          packages = {
            dd-ix-website = package-production;
            default = package-production;
          };
        }
      ) // {
      overlays.default = final: prev: {
        inherit (self.packages.${prev.system})
          dd-ix-website;
      };
    };
}
