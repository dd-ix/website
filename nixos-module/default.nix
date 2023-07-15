{ pkgs, config, lib, ... }:
let
  cfg = config.dd-ix.presence;
in
{
  options.dd-ix.presence = with lib; {
    enable = mkOption {
      type = types.bool;
      default = false;
      description = ''Wether to enable presence service'';
    };
    user = mkOption {
      type = types.str;
      default = "presence";
      description = ''systemd user'';
    };
    group = mkOption {
      type = types.str;
      default = "presence";
      description = ''group of systemd user'';
    };
  };

  config = lib.mkIf cfg.enable {
    systemd = {
      services = {
        "presence" = {
          enable = true;
          wantedBy = [ "multi-user.target" ];

          script = ''
            cd ${pkgs.presence}
            exec ${pkgs.nodejs}/bin/node dist/presence/server/main.js&
          '';

          serviceConfig = {
            Type = "forking";
            User = cfg.user;
            Restart = "always";
          };
        };
      };
    };

    # user accounts for systemd units
    users.users."${cfg.user}" = {
      name = "${cfg.user}";
      description = "This guy runs presence";
      isNormalUser = false;
      isSystemUser = true;
      group = cfg.group;
      uid = 1502;
    };
  };
}
