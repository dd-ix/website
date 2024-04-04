{ pkgs, config, lib, ... }:

let
  cfg = config.dd-ix.website;
in
{
  options.dd-ix.website = {
    enable = lib.mkEnableOption "website";

    package = lib.mkPackageOption pkgs "website" { };

    domain = lib.mkOption {
      type = lib.types.str;
      description = "The domain the frontend should be served.";
    };
  };

  config = lib.mkIf cfg.enable {
    systemd.services.website = {
      enable = true;
      wantedBy = [ "multi-user.target" ];

      environment = {
        APP_DIR = "${pkgs.website}";
      };

      serviceConfig = {
        ExecStart = "${pkgs.nodejs}/bin/node ${cfg.package}/server.mjs";
        DynamicUser = true;
        Restart = "always";
      };
    };

    services.nginx = {
      enable = true;

      virtualHosts."${cfg.domain}".locations = {
        "/" = {
          root = "${cfg.package}/browser";
          # just something that does not exists
          index = "X6XewZMsmreGIxx1lCdp0Yo1X4qHTivW";
          tryFiles = "$uri @website";
          extraConfig = ''
            expires max;
            access_log off;
          '';
        };
        "@website" = {
          recommendedProxySettings = true;
          proxyPass = "http://127.0.0.1:4000";
        };
      };
    };
  };
}
