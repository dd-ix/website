{ pkgs, config, lib, ... }:
let
  cfg = config.dd-ix.website;
in
{
  options.dd-ix.website = with lib; {
    enable = mkOption {
      type = types.bool;
      default = false;
      description = ''Wether to enable website service'';
    };
    user = mkOption {
      type = types.str;
      default = "website";
      description = ''systemd user'';
    };
    group = mkOption {
      type = types.str;
      default = "website";
      description = ''group of systemd user'';
    };
  };

  config = lib.mkIf cfg.enable {
    systemd = {
      services = {
        "website" = {
          enable = true;
          wantedBy = [ "multi-user.target" ];

          script = ''
            export APP_DIR=${pkgs.website}
            exec ${pkgs.nodejs}/bin/node ${pkgs.website}/server.mjs&
          '';

          serviceConfig = {
            Type = "forking";
            User = cfg.user;
            Restart = "always";
          };
        };
      };
    };

    users.groups."${cfg.group}" = {};

    # user accounts for systemd units
    users.users."${cfg.user}" = {
      name = "${cfg.user}";
      description = "This guy runs website";
      isNormalUser = false;
      isSystemUser = true;
      group = cfg.group;
      uid = 1502;
    };
  };
}
