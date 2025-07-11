{ pkgs, config, lib, ... }:

let
  cfg = config.dd-ix.website;
  package = cfg.package.override {
    inherit (cfg) contentApi;
  };
in
{
  options.dd-ix.website = {
    enable = lib.mkEnableOption "website";

    package = lib.mkPackageOption pkgs "website" { };

    domain = lib.mkOption {
      type = lib.types.str;
      description = "The domain the frontend should be served.";
    };

    contentApi = lib.mkOption {
      type = lib.types.str;
      description = "The domain the content api is listening.";
    };
  };

  config = lib.mkIf cfg.enable {
    systemd.services.website = {
      enable = true;
      wantedBy = [ "multi-user.target" ];

      serviceConfig = {
        ExecStart = "${pkgs.nodejs}/bin/node ${package}/server/server.mjs";
        DynamicUser = true;
        Restart = "always";
      };
    };

    services.nginx = {
      enable = true;
      commonHttpConfig = ''
        map $http_accept_language $accept_language {
          ~*^de de;
          default en;
        }
      '';

      virtualHosts."${cfg.domain}".locations = {
        "/" = {
          root = "${package}/browser";
          # just something that does not exists
          index = "X6XewZMsmreGIxx1lCdp0Yo1X4qHTivW";
          tryFiles = "$uri @website";
          extraConfig = ''
            expires max;
            access_log off;
            rewrite ^/(?!de(?:/|$)|en(?:/|$))(.*)$ /$accept_language/$1 redirect;
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
