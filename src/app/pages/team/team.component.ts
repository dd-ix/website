import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from "../../api/team.service";
import { TeamMember } from "../../api/team.domain";
import { TeamMemberComponent } from '../../core/team-member/team-member.component';

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
