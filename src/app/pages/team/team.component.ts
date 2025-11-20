import {Component} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {TeamService} from "../../api/team.service";
import {CardComponent} from "../../core/card/card.component";
import {IconGithubComponent} from "../../icons/icon-github/icon-github.component";
import {IconMastodonComponent} from "../../icons/icon-mastodon/icon-mastodon.component";
import {IconGlobeComponent} from "../../icons/icon-globe/icon-globe.component";
import {IconMailComponent} from "../../icons/icon-mail/icon-mail.component";
import {IconLinkedinComponent} from "../../icons/icon-linkedin/icon-linkedin.component";
import {IconRipeComponent} from "../../icons/icon-ripe/icon-ripe.component";
import {TeamMemberComponent} from "./team-member/team-member.component";
import {TeamMember} from "../../api/team.domain";

@Component({
  selector: 'app-team',
  imports: [CommonModule, TeamMemberComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  protected readonly team;

  constructor(
    private readonly teamService: TeamService,
  ) {
    this.team = this.teamService.getTeam();
  }

  protected filter(members: TeamMember[] | null, vorstand: boolean): TeamMember[] | null {
    if (members === null) return null;
    return members.filter(member => member.vorstand === vorstand);
  }
}
